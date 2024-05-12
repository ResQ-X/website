import { DivIcon, Icon, IconOptions } from "leaflet";
import { useRef } from "react";
import { Marker } from "react-leaflet";

// Interface
interface IProps {
  position: [number, number];
  icon: Icon<IconOptions> | DivIcon | undefined;
}
const RenderMarker = ({ position, icon }: IProps) => {
  const markerRef = useRef(null);

  if (!position[0] || !position[1]) return null;

  return <Marker ref={markerRef} position={position} icon={icon} />;
};

export default RenderMarker;
