import React, { Component, PropTypes } from 'react';
const ol = require('openlayers');
require("openlayers/css/ol.css");

class MapComponent extends Component {
    componentDidMount() {
        console.log(111);
        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: [949282, 6002552],
                zoom: 4
            })
        });
        map.on('moveend', function(){console.log("map moved")});
    }
    render() {
        return (
            <div id="map"></div>
        );
    }
}

export default MapComponent
