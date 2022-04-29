import React, { useState, useEffect, useRef } from 'react';
import 'ol/ol.css';
import marker from '../assets/images/marker.svg'
import {defaults as defaultInteractions} from 'ol/interaction.js';
import './MapLayer.scss';

import {Icon, Style} from 'ol/style';
import {Feature, Map, View} from 'ol/index';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Point} from 'ol/geom';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

function MapLayer() {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(() => {
        const initialMap = new Map({
            interactions: defaultInteractions({
                mouseWheelZoom: false
            }),
            view: new View({
                projection: 'EPSG:4326',
                center: [44.50278695431417, 40.177409537684376],
                zoom: 18,
            }),
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(new Point([44.50278695431417, 40.177409537684376]))],
                    }),
                    style: new Style({
                        image: new Icon({
                            anchor: [0.5, 46],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'pixels',
                            crossOrigin: 'anonymous',
                            src: marker
                        })
                    }),
                }),
            ],
        });
        initialMap.on('pointermove', function(evt){
            console.log(evt.coordinate);
        });
        setMap(initialMap);
    }, []);

    return (
        <div ref={mapElement} className="map-container" />
    );
}

export default MapLayer;
