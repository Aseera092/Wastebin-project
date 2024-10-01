import React, { useEffect, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';

const CurrentLocation = () => <i className='fa fa-2x fa-location' style={{ color: 'blue' }}></i>;

const Spots = () => <i className='fa fa-2x fa-map-marker' style={{ color: 'red' }}></i>;


export default function MapView() {

    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }, []);

    const defaultProps = {
        center: {
            lat: 10.206820,
            lng: 76.377058
        },
        zoom: 15
    };
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
                position.latitude && isLoaded ?
                    <GoogleMap
                        mapContainerStyle={{
                            height: "100%",
                            width: "100%"
                        }}
                        zoom={defaultProps.zoom}
                        center={defaultProps.center}
                        streetViewControl={false}
                    //   onClick={() => setSelectedCenter(null)}
                    >

                        <Marker
                            position={{lat: position.latitude,lng: position.longitude}}
                            // icon={{
                            //     // url: item.charger_status.toLowerCase() === 'available' ? operationalIconUrl : item.charger_status.toLowerCase() === 'busy' ? faultOperationalIconUrl : item.charger_status.toLowerCase() === 'unavailable' ? nonOperationalIconUrl : nonOperationalIconUrl,
                            //     scaledSize: new window.google.maps.Size(35, 35), // Scale the icon size
                            //     anchor: new window.google.maps.Point(10, 10), // Anchor the icon
                            // }}
                        //   onClick={() => setSelectedCenter({position,...item})}
                        />


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
