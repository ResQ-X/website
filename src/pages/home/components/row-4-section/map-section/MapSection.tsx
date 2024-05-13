/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styles from "./MapSection.module.css";
import LeafletMap from "../../../../../components/leaflet/LeafletMap";
import { getHereMiles } from "../../../../../utils/here";
import { getRandomPoint } from "../../../../../utils/decode";

const MapSection = () => {
  // Functions, States and Variables
  // Respondent position
  const [respondentPos, setRespondentPos] = useState<[number, number]>([0, 0]);
  // An array of arrays of coordinates that make up the route polyline from the respondent to the user position
  const [polylineRoute, setPolylineRoute] = useState<any>([]);
  // User coordinates
  const [userCoordinates, setUserCoordinates] = useState<[number, number]>([
    0, 0,
  ]);

  // Functions
  // On success of getting user's position
  const handleOnSuccessOfGettingUserGeolocation = function (
    position: GeolocationPosition
  ) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log({ latitude, longitude });
    setUserCoordinates([latitude, longitude]);
  };

  //
  const handleOnErrorOfGettingUserGeolocation = function (
    error: GeolocationPositionError
  ) {
    // Handle errors
    console.error("Error getting location:", error);
  };

  // UseEffects
  useEffect(() => {
    // Get Users position through window geolocation API
    if ("geolocation" in navigator) {
      const geolocationConfig = {
        enableHighAccuracy: true,
        maximumAge: 0,
      };

      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        handleOnSuccessOfGettingUserGeolocation,
        handleOnErrorOfGettingUserGeolocation,
        geolocationConfig
      );
    } else {
      // Geolocation is not available
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (!userCoordinates || userCoordinates[0] === 0) return;
    // Get random respondent position within 1000 meters of user's position
    const randomRespondentPosition = getRandomPoint(
      userCoordinates[0],
      userCoordinates[1],
      1000
    );
    // Get route polyline from respondent to user position and set respondent position and polyline route
    (async () => {
      const { polyline } = await getHereMiles(
        {
          _lat: randomRespondentPosition.latitude,
          _long: randomRespondentPosition.longitude,
        },
        { _lat: userCoordinates[0], _long: userCoordinates[1] }
      );
      setRespondentPos([polyline[0][0], polyline[0][1]]);
      setPolylineRoute(polyline);
    })();
  }, [userCoordinates]);

  useEffect(() => {
    // Interval that moves the respondent position along the route polyline to user's position
    let currPosition = 0;
    const interval = setInterval(() => {
      if (currPosition === polylineRoute.length) {
        setRespondentPos([0, 0]);
        clearInterval(interval);
        return;
      }
      if (!currPosition) {
        // setCurrPos(1);
        currPosition = 1;
        setRespondentPos(polylineRoute[1]);
      } else {
        let cp = currPosition;
        currPosition += 1;
        setRespondentPos(polylineRoute[cp++]);
      }
    }, 1000);

    // Clear interval
    return () => clearInterval(interval);
  }, [polylineRoute]);

  return (
    <section className={styles.map_container}>
      <LeafletMap
        userCoordinates={userCoordinates}
        respondentPos={respondentPos}
      />
    </section>
  );
};

export default MapSection;
