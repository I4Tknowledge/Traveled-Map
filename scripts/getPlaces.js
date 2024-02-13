const fs = require('fs');
const csv = require("csv-parser");

const { getPlaceString, inputFile, placesOutputFile } = require('./utils')

const places = []
// ETAPE 1: Récupérer le hashToPlacesMap et donner à ChatGPT pour le reverse Geocoding
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', async (row) => {
        const name = row['﻿Name'];
        const city = row['City'];
        const country = row['Country'];
        // console.log({ name, city, country })

        const placeString = getPlaceString(name, city, country);
        // hashToPlacesMap.push({ hash, place: placeString });
        places.push(placeString);
    })
    .on('end', () => {
        fs.writeFileSync(placesOutputFile, JSON.stringify(places, null, 2));
        console.log(`Places saved to ${placesFile}`);
    });