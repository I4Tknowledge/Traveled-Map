# Projet UNESCO

Ce repository contient le code permettant le traitement des données des organisations, ainsi que leur 
affichage sur une carte. 

## Utilisation sur un site

Le fichier `index.html` est un exemple d'affichage pour la page, mais le contenu peut être copié dans n'importe quelle
page web.

1. Prendre la `<div id='map' style="width: 100%; height: 100%;"></div>` et la placer dans le code HTML du site, 
à l'endroit où la carte doit être affichée
2. Prendre les deux balises scripts dans leur intégralité et les copier à la fin de la balise `<body>` de la page

```
<script src='https://api.mapbox.com/mapbox-gl-js/v3.1.2/mapbox-gl.js'></script>
<script>
    ...
</script>
```

3. Le tour est joué, la carte devrait s'afficher (tant que la div qui contient la `<div id='map' ...></div>` a une taille
suffisante).
 
## Traitement des données

1. Pour commencer, il faut exporter le fichier excel en csv et le placer dans files/export.csv
2. Ensuite, il faut extraire les lieux de ce fichier en lançant `node getPlaces.js`
3. L'opération précédente va créer un fichier dans `files/places.json`. Il faut prendre le contenu de ce fichier
et, dans le fichier `files/places.js`, remplacer la variable `places` par le contenu copié.
4. Demander à ChatGPT de convertir les places en coordonnées (détail dans la section suivante)
5. Une fois les coordonnées récupérées de ChatGPT, remplacer la variable `coordinatesByChatGPT` du fichier 
`files/coordinates.js` par la liste.
6. Eventuellement, vérifier les doublons avec le script `node ./scripts/getDoublons.js` et les supprimer manuellement
dans les coordonnées ET dans les places.
7. Récupérer la donnée GeoJSON en lançant `node ./scripts/getMapGeoJsonData.js`
8. Finalement, prendre cette donnée et remplacer dans la `data` de `map.addSource` du fichier `index.html`

### Récupération des coordonnées via ChatGTP

Il faut utiliser le prompt suivant sur ChatGPT 3.5 :

```
Donne moi, dans le même ordre, et sans ignorer d'élément (quitte à mettre une chaine vide si besoin),
les coordonnées de ces lieux. Les coordonnées peuvent être approximatives (uniquement la ville, ou le pays si tu
ne connais pas le lieu). Il faut que les coordonnées soient au format de Mapbox [longitude, latitude]

[
    "Nanyang Technological University Singapore Singapore Singapore",
    "Institute for Technology & Society (ITS) Rio de Janeiro Brazil",
    ...
]
```

Attention, c'est possible qu'en faisant "continue generation, il se mette à inventer des lieux. Il faut bien compararer
l'entrée et la sortie.

