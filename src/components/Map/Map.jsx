import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from './styles'

const Map = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = {lat:0, lng:0}
return <div className={classes.mapContainer}>
<GoogleMapReact
bootstrapURLKeys={{key:'AIzaSyBTi0VVRz0EFj0iFGEszqmzzndK7YBJwE8'}}
defaultCenter={coordinates}
center={coordinates}
defaultZoom={14}
margin={[50, 50, 50, 50]}
options={''}
onChange={''}
onChangeClick={''}
>

</GoogleMapReact>
</div>
}
export default Map
