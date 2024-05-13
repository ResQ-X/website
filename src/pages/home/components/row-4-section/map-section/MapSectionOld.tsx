/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./MapSection.module.css";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Circle } from "react-leaflet/Circle";
import { Pane } from "react-leaflet/Pane";

function MapSectionOld() {
  // FUnctions, States and Variables
  const defaultCenteredPosition: LatLngExpression = [6.5244, 3.3792];
  //
  const [userCoordinates] = useState<LatLngExpression>([6.5057, 3.3918]);

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     // Geolocation is available
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;

  //         setUserCoordinates([latitude, longitude]);
  //         // Do something with latitude and longitude
  //         console.log(userCoordinates, { position: defaultCenteredPosition });
  //       },
  //       function (error) {
  //         // Handle errors
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   } else {
  //     // Geolocation is not available
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return (
    <section className={styles.map_container}>
      <MapContainer
        center={defaultCenteredPosition}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={defaultCenteredPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <Marker position={userCoordinates}>
          <Popup>my corrdinates</Popup>
        </Marker>

        <Pane name="custom" style={{ zIndex: 100 }}>
          <Circle center={userCoordinates} radius={200} />
        </Pane>
      </MapContainer>
    </section>
  );
}

export default MapSectionOld;
