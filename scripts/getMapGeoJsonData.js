const fs = require('fs');
const csv = require("csv-parser");
const { getPlaceString, geojsonOutputFile } = require('./utils')
const { coordinatesByChatGPT } = require('../files/coordinates')
const { places } = require('../files/places')

const geojsonData = {
    type: 'FeatureCollection',
    features: []
};

fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', async (row) => {
        const contactType = row['Contact Type'];
        const social = row['Social'];
        const socialType = row['Social Type'];
        const website = row['Website'];
        const name = row['﻿Name'];
        const city = row['City'];
        const country = row['Country'];
        const coordinates = coordinatesByChatGPT[places.findIndex(place => getPlaceString(name, city, country) === place)]

        geojsonData.features.push({
            type: 'Feature',
            properties: {
                name,
                description: ''
            },
            geometry: {
                type: 'Point',
                coordinates
            }
        });

    })
    .on('end', () => {
        fs.writeFileSync(outputFile, JSON.stringify(geojsonData, null, 2));
        console.log(`GeoJSON saved to ${geojsonOutputFile}`);
    });