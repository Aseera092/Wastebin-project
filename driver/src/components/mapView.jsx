import React, { useEffect, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { getMachine } from '../services/machine';




export default function MapView() {

    const [currentLocation, setCurrentLocation] = useState(null);
    const [machines, setMachines] = useState([]);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.error("Geolocation is not available in your browser.");
        }
        getMachine().then((res => {
            console.log(res);
            setMachines(res.data.map((dt) => ({ lat: dt.latitude, lng: dt.longitude, storage: dt.storage })))
        }))
    }, []);

    const handleApiLoaded = (map, maps) => {
        console.log(map);

    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyB_D6SgHRz8T6y2fPiVtAS4uYq0eUfkBUQ'
    })


    return (

        <div style=
            {{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                height: '100vh', width: '100%'
            }}>
            {
                machines[0]?.lat && isLoaded ?
                    <GoogleMap
                        mapContainerStyle={{
                            height: "100%",
                            width: "100%"
                        }}
                        zoom={20}
                        center={
                            currentLocation
                                ? currentLocation
                                : { lat: machines[0].lat, lng: machines[0].lng }
                        }
                        streetViewControl={false}
                    //   onClick={() => setSelectedCenter(null)}
                    >
                        {
                            machines.map((dt) => {
                                return (
                                    <Marker position={dt}
                                        icon={{
                                            url: `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="${dt.storage > 50 ? 'red' : 'black'}"><path d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.9a24 24 0 00-21.5 13.3L136 32H16A16 16 0 000 48v16a16 16 0 0016 16h16l21.2 339.3A48 48 0 00100.8 480h246.4a48 48 0 0047.6-42.7L416 80h16a16 16 0 0016-16V48a16 16 0 00-16-16zM166.9 48h114.3l7.2 14.7H159.7L166.9 48zM368 432H80L59 80h330l-21 352z"/></svg>`,
                                            scaledSize: new window.google.maps.Size(45, 45), // Scale the icon size
                                            anchor: new window.google.maps.Point(10, 10), // Anchor the icon
                                        }}
                                        label={{
                                            text: `${dt.storage}%`, // Show storage percentage as text
                                            color: dt.storage > 50 ? "red" : "black", // Customize label color
                                            fontSize: "12px", // Customize font size
                                            fontWeight: "bold",
                                        }}
                                    //   onClick={() => setSelectedCenter({position,...item})}
                                    />
                                )
                            })
                        }

                        {currentLocation && (
                            <Marker
                                position={currentLocation}
                                icon={{
                                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Custom icon for current location
                                }}
                            />
                        )}



                        {/* {selectedCenter && <InfoWindow
            onCloseClick={() => {
              setSelectedCenter(null);
            }}
            position={selectedCenter.position}
          >
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <img src={`${selectedCenter.image}`} height={'100px'} width={'100%'} style={{ objectFit: 'cover' }} />
              </Grid>
              <Grid item xs={9} >
                <Stack sx={{ justifyContent: "center", height: '100%' }}>
                  <Typography variant='body2' color={'#000'} sx={{ fontWeight: '500' }}>{selectedCenter.name}</Typography>
                  <Typography variant='body2' color={'#000'} sx={{ fontWeight: '300' }}>{selectedCenter.address}</Typography>
                </Stack>
              </Grid>
            </Grid>
          </InfoWindow>} */}
                    </GoogleMap> : "Loading..."
            }
        </div>
    );
}
