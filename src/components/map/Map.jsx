import React, { useEffect, useState } from 'react'
import { load } from '@2gis/mapgl';
import { MapWrapper } from './MapWrapper';
export default function EstateMap() {
    const [mapInstance, setMapInstance] = useState();

    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            // container — id of the div element in your html
            map = new mapglAPI.Map('map-container', {
                center: [55.31878, 25.23584],
                zoom: 13,
                key: 'Your API access key',
            });
        });

        // Destroy the map on unmounted
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
}