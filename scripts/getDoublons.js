const { coordinatesByChatGPT } = require('../files/coordinates')
const { places } = require('../files/places')

const seen = new Set();
const duplicates = [];

coordinatesByChatGPT.forEach((item, index) => {
    const itemAsString = JSON.stringify(item);
    if (seen.has(itemAsString)) {
        duplicates.push(item);
        console.log(`Doublon trouvé : ${places[index]}: ${item}`);
    } else {
        seen.add(itemAsString);
    }
})