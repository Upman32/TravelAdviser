import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getPlacesData, getWeatherData } from "./API";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
const App = () => {
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);
  const [weatherdata, setWeatherData] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);
  useEffect(()=>{
    const filteredPlaces =places.filter(()=> places.rating>rating)
    setFilteredPlaces(filteredPlaces)
  },[rating]);
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
    setIsLoading(true);
    getWeatherData(coordinates.lat, coordinates.lng).then(data => setWeatherData(data))
    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data?.filter(place => place.name && place.num_reviews > 0));
      setFilteredPlaces([])
      setIsLoading(false);
    });
  }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline>
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked}
              isLoading={isLoading}
              setType={setType}
              rating={rating}
              setRating={setRating}
              type={type}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              places={filteredPlaces.length ? filteredPlaces : places}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              setChildClicked={setChildClicked}
              weatherdata={weatherdata}
            />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
};
export default App;
