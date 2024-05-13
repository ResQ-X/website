import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { DivIcon, Icon, IconOptions, LatLngExpression, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import RenderMarker from "./RenderMarker";

const center: LatLngExpression = [6.5, 3.35];
const leafletMapBoxUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
// "https://api.mapbox.com/styles/v1/wingedanubis/clo0fh82u00cc01qv4i4i61yk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoid2luZ2VkYW51YmlzIiwiYSI6ImNsbzBmM2Q0bjFidmQyaW1jd3VhNWoxYmsifQ.iqhja3Zm8cRtfEu2hP4WQA";

// Interface
interface IProps {
  userCoordinates: [number, number];
  respondentPos: [number, number];
}
const LeafletMap = ({ userCoordinates, respondentPos }: IProps) => {
  const iconMarkup = renderToStaticMarkup(
    <div className="relative flex h-[6px] w-[6px] justify-center items-center">
      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-65"></div>
      <div className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#ff0000] opacity-80"></div>
    </div>
  );

  const blackIconMarkup = renderToStaticMarkup(
    <div className="relative flex h-[6px] w-[6px] justify-center items-center">
      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-65"></div>
      <div className="relative inline-flex rounded-full h-[6px] w-[6px] bg-black opacity-80"></div>
    </div>
  );

  const customMarkerIcon = divIcon({
    iconSize: [10, 10],
    className: "mymarker",
    html: iconMarkup,
  });

  const blackCustomMarkerIcon = divIcon({
    iconSize: [10, 10],
    className: "mymarker",
    html: blackIconMarkup,
  });

  return (
    <MapContainer
      center={center}
      style={{ width: "100%", height: "100%" }}
      zoom={15}
      attributionControl={false}
      // scrollWheelZoom={false}
      // zoomControl={false}
    >
      <MapContent
        userCoordinates={userCoordinates}
        customMarkerIcon={customMarkerIcon}
        blackCustomMarkerIcon={blackCustomMarkerIcon}
        respondentPos={respondentPos}
      />
    </MapContainer>
  );
};

export default LeafletMap;

// Interface
interface IMapContentProps {
  userCoordinates: [number, number];
  respondentPos: [number, number];
  customMarkerIcon: Icon<IconOptions> | DivIcon | undefined;
  blackCustomMarkerIcon: Icon<IconOptions> | DivIcon | undefined;
}

const MapContent = ({
  userCoordinates,
  customMarkerIcon,
  respondentPos,
  blackCustomMarkerIcon,
}: IMapContentProps) => {
  const map = useMap();
  useEffect(() => {
    if (!userCoordinates || userCoordinates.length !== 2) return;
    map.setZoom(18);
    map.flyTo(userCoordinates, map.getZoom());
  }, [userCoordinates]);

  return (
    <>
      {" "}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={leafletMapBoxUrl}
      />
      {userCoordinates && (
        <RenderMarker icon={blackCustomMarkerIcon} position={userCoordinates} />
      )}
      {respondentPos && (
        <RenderMarker icon={customMarkerIcon} position={respondentPos} />
      )}
    </>
  );
};
