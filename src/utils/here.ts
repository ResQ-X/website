/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { decode } from "./decode";

// Interface
interface ILatLng {
  _lat: number;
  _long: number;
}

const getRouteUrl = (origin: ILatLng, destination: ILatLng) => {
  return `https://router.hereapi.com/v8/routes?transportMode=truck&origin=${
    origin._lat
  },${origin._long}&destination=${destination._lat},${
    destination._long
  }&return=summary,polyline&apikey=${import.meta.env.VITE_APP_PUBLIC_HERE_KEY}`;
};

export const getHereMiles = async (origin: ILatLng, destination: ILatLng) => {
  const { data } = await axios.get(getRouteUrl(origin, destination));
  return {
    length: Number(
      (data?.routes[0]?.sections[0]?.summary?.length * 0.0006213712).toFixed(3)
    ),
    polyline: decode(data?.routes[0]?.sections[0]?.polyline)?.polyline,
  }; // meters
};
