const fs = require('fs');
const csv = require("csv-parser");
const { getPlaceString, geojsonOutputFile, inputFile } = require('./utils')
const { coordinatesByChatGPT } = require('../files/coordinates')
const { places } = require('../files/places')

const geojsonData = {
    type: 'FeatureCollection',
    features: []
};

const alreadyHandledCoordinates = [];
const randomizeCoordinates = (coordinates) => coordinates + ((Math.random() * 5 / 100) * (Math.random() > 0.5 ? -1 : 1))

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

        let finalCoordinates = coordinates;
        if (alreadyHandledCoordinates.some(coords => JSON.stringify(coords) === JSON.stringify(coordinates))) {
            finalCoordinates = [randomizeCoordinates(coordinates[0]), randomizeCoordinates(coordinates[1])]
        }
        alreadyHandledCoordinates.push(finalCoordinates);

        geojsonData.features.push({
            type: 'Feature',
            properties: {
                name,
                contactType,
                social,
                socialType,
                website,
            },
            geometry: {
                type: 'Point',
                coordinates: finalCoordinates,
            }
        });

    })
    .on('end', () => {
        fs.writeFileSync(geojsonOutputFile, JSON.stringify(geojsonData, null, 2));
        console.log(`GeoJSON saved to ${geojsonOutputFile}`);
    });