/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./MapSection.module.css";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

function MapSection2() {
  // FUnctions, States and Variables

  useEffect(() => {
    const map = L.map("map-2");
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
    }).addTo(map);

    const taxiIcon = L.icon({
      iconUrl: "src/assets/images/svg/navclose-icon.svg",
      iconSize: [70, 70],
    });

    const marker = L.marker([28.238, 83.9956], { icon: taxiIcon }).addTo(map);

    map.on("click", function (e) {
      console.log(e);
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(28.238, 83.9956),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
      })
        .on("routesfound", function (e) {
          const routes = e.routes;
          console.log(routes);

          e.routes[0].coordinates.forEach(function (coord: any, index: number) {
            setTimeout(function () {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index);
          });
        })
        .addTo(map);
    });
  }, []);

  return (
    <section className={styles.map_container}>
      <div id="map-2"></div>{" "}
    </section>
  );
}

export default MapSection2;
