'use client';

import React , {useEffect, useRef} from 'react';
import { Loader } from '@googlemaps/js-api-loader';
// import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



// function GoogleMap() {
//   const position = {lat: 35.75547446326668, lng: 51.40515220751757};

//   return (
//     <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY as string}>
//       <Map defaultCenter={position} defaultZoom={10}>
//         <Marker position={position} />
//       </Map>
//     </APIProvider>
//   );
// }

// export default GoogleMap;

export default function Map(){

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
       const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
          version:"weekly"
       });

       const {Map} = await loader.importLibrary("maps");

       const {Marker} = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

       const position = {
        lat: 35.75547446326668,
        lng: 51.40515220751757,
       
       }

       const mapOptions: google.maps.MapOptions = {
         center:position,
         zoom:17,
         mapId : 'MY_NEXTJS_MAPID',
        //  clickableIcons:true
       }

       const map = new Map(mapRef.current as HTMLDivElement , mapOptions)
       const marker = new Marker({
        map:map,
        position:position
       });
    }
    initMap();
  },[])
 return (
  <div className="h-[400px]" ref={mapRef}></div>
 )
}

// NEXT_PUBLIC_MAPS_API_KEY = AIzaSyC6RCDI2Ve6c3Gsy15YCXR-PdclDT4jorE

























// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '400px'
// };


// // 35.75547446326668, 51.40515220751757

// const center = {
//   lat: 35.75547446326668,
//   lng: 51.40515220751757
// };

// function GoogleMaps() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   })

//   const [map, setMap] = React.useState(null)


//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={12}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(GoogleMaps)