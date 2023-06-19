/*
 * File: googleMap.component.jsx
 * Project: portfolio
 * File Created: Monday, 19th June 2023 3:53:07 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Monday, 19th June 2023 4:15:42 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 49.9,
            lng: -97.1411110
        },
        zoom: 11
    };

    return (

        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={49.9}
                    lng={-97.4}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}