const inputFile = './files/export.csv';
const geojsonOutputFile = './files/output.geojson';
const placesOutputFile = './files/places.json';

const getPlaceString = (name, city, country) => `${name || ''} ${city || ''} ${country || ''}`;

module.exports = {
    inputFile,
    geojsonOutputFile,
    placesOutputFile,
    getPlaceString,
}