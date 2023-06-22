import React from 'react'
import styles from "./Map.module.scss"
import GoogleMapReact from 'google-map-react';

const Map = () => {
    const defaultProps = {
        center: {
          lat: 21.0812945,
          lng: 107.206897
        },
        zoom: 11
      };
  return (
    <div className={styles.map}>
       <GoogleMapReact defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom} >

       </GoogleMapReact>
    </div>
  )
}

export default Map