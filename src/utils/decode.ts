/* eslint-disable @typescript-eslint/no-explicit-any */
const DEFAULT_PRECISION = 5;

const ENCODING_TABLE =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

const DECODING_TABLE: number[] = [
  62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33,
  34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
];

const FORMAT_VERSION = 1;

const ABSENT = 0;
const LEVEL = 1;
const ALTITUDE = 2;
const ELEVATION = 3;
// Reserved values 4 and 5 should not be selectable
// const CUSTOM1 = 6;
// const CUSTOM2 = 7;

type Location = [number, number, number?];

const Num: any = typeof BigInt !== "undefined" ? BigInt : Number;

function decode(encoded: string) {
  const decoder = decodeUnsignedValues(encoded);
  const header = decodeHeader(decoder[0], decoder[1]);

  const factorDegree = 10 ** header.precision;
  const factorZ = 10 ** header.thirdDimPrecision;
  const { thirdDim } = header;

  let lastLat = 0;
  let lastLng = 0;
  let lastZ = 0;
  const res: Location[] = [];

  let i = 2;
  for (; i < decoder.length; ) {
    const deltaLat = toSigned(decoder[i]) / factorDegree;
    const deltaLng = toSigned(decoder[i + 1]) / factorDegree;
    lastLat += deltaLat;
    lastLng += deltaLng;

    if (thirdDim) {
      const deltaZ = toSigned(decoder[i + 2]) / factorZ;
      lastZ += deltaZ;
      res.push([lastLat, lastLng, lastZ]);
      i += 3;
    } else {
      res.push([lastLat, lastLng]);
      i += 2;
    }
  }

  if (i !== decoder.length) {
    throw new Error("Invalid encoding. Premature ending reached");
  }

  return {
    ...header,
    polyline: res,
  };
}

function decodeChar(char: string) {
  const charCode = char.charCodeAt(0);
  return DECODING_TABLE[charCode - 45];
}

function decodeUnsignedValues(encoded: string) {
  let result = Num(0);
  let shift = Num(0);
  const resList: number[] = [];

  encoded?.split("").forEach((char) => {
    const value = Num(decodeChar(char));
    result |= (value & Num(0x1f)) << shift;
    if ((value & Num(0x20)) === Num(0)) {
      resList.push(result);
      result = Num(0);
      shift = Num(0);
    } else {
      shift += Num(5);
    }
  });

  if (shift > 0) {
    throw new Error("Invalid encoding");
  }

  return resList;
}

function decodeHeader(version: number, encodedHeader: number) {
  if (+version?.toString() !== FORMAT_VERSION) {
    throw new Error("Invalid format version");
  }
  const headerNumber = +encodedHeader?.toString();
  const precision = headerNumber & 15;
  const thirdDim = (headerNumber >> 4) & 7;
  const thirdDimPrecision = (headerNumber >> 7) & 15;
  return { precision, thirdDim, thirdDimPrecision };
}

function toSigned(val: number) {
  // Decode the sign from an unsigned value
  let res = val;
  if (res & Num(1)) {
    res = ~res;
  }
  res >>= Num(1);
  return +res?.toString();
}

function encode({
  precision = DEFAULT_PRECISION,
  thirdDim = ABSENT,
  thirdDimPrecision = 0,
  polyline,
}: {
  precision?: number;
  thirdDim?: number;
  thirdDimPrecision?: number;
  polyline: Location[];
}) {
  const multiplierDegree = 10 ** precision;
  const multiplierZ = 10 ** thirdDimPrecision;
  const encodedHeaderList = encodeHeader(
    precision,
    thirdDim,
    thirdDimPrecision
  );
  const encodedCoords: number[] = [];

  let lastLat = Num(0);
  let lastLng = Num(0);
  let lastZ = Num(0);
  polyline.forEach((location) => {
    const lat = Num(Math.round(location[0] * multiplierDegree));
    encodedCoords.push(Number(encodeScaledValue(lat - lastLat)));
    lastLat = lat;

    const lng = Num(Math.round(location[1] * multiplierDegree));
    encodedCoords.push(Number(encodeScaledValue(lng - lastLng)));
    lastLng = lng;

    if (thirdDim && location !== undefined && location[2] !== undefined) {
      const z = Num(Math.round(location[2] * multiplierZ));
      encodedCoords.push(Number(encodeScaledValue(z - lastZ)));
      lastZ = z;
    }
  });

  return [...encodedHeaderList, ...encodedCoords].join("");
}

function encodeHeader(
  precision: number,
  thirdDim: number,
  thirdDimPrecision: number
) {
  // Encode the `precision`, `third_dim` and `third_dim_precision` into one encoded char
  if (precision < 0 || precision > 15) {
    throw new Error("precision out of range. Should be between 0 and 15");
  }
  if (thirdDimPrecision < 0 || thirdDimPrecision > 15) {
    throw new Error(
      "thirdDimPrecision out of range. Should be between 0 and 15"
    );
  }
  if (thirdDim < 0 || thirdDim > 7 || thirdDim === 4 || thirdDim === 5) {
    throw new Error("thirdDim should be between 0, 1, 2, 3, 6 or 7");
  }

  const res = (thirdDimPrecision << 7) | (thirdDim << 4) | precision;
  return [
    encodeUnsignedNumber(FORMAT_VERSION),
    encodeUnsignedNumber(res),
  ] as any[];
}

function encodeUnsignedNumber(val: number) {
  // Uses variable integer encoding to encode an unsigned integer. Returns the encoded string.
  let res = "";
  let numVal = Num(val);
  while (numVal > 0x1f) {
    const pos = (numVal & Num(0x1f)) | Num(0x20);
    res += ENCODING_TABLE[pos];
    numVal >>= Num(5);
  }
  return res + ENCODING_TABLE[numVal];
}

function encodeScaledValue(value: number) {
  // Transform a integer `value` into a variable length sequence of characters.
  //   `appender` is a callable where the produced chars will land to
  let numVal = Num(value);
  const negative = numVal < 0;
  numVal <<= Num(1);
  if (negative) {
    numVal = ~numVal;
  }

  return encodeUnsignedNumber(numVal);
}

export function getRandomPoint(
  originLat: number,
  originLng: number,
  radiusInMeters: number
) {
  const earthRadius = 6371000;

  const latRad = originLat * (Math.PI / 180);
  const lngRad = originLng * (Math.PI / 180);

  const randomAngle = Math.random() * 2 * Math.PI;

  const newLatRad =
    latRad + (radiusInMeters / earthRadius) * Math.cos(randomAngle);
  const newLngRad =
    lngRad + (radiusInMeters / earthRadius) * Math.sin(randomAngle);

  const newLat = newLatRad * (180 / Math.PI);
  const newLng = newLngRad * (180 / Math.PI);

  return { latitude: newLat, longitude: newLng };
}

export { encode, decode, ABSENT, LEVEL, ALTITUDE, ELEVATION };
