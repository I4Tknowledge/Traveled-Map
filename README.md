# Projet UNESCO

Ce repository contient le code permettant le traitement des données des organisations, ainsi que leur 
affichage sur une carte. 

## Utilisation sur un site

Le fichier `index.html` est un exemple d'affichage pour la page, mais le contenu peut être copié dans n'importe quelle
page web.

1. Prendre toute la `<div class="unesco-map-container">` et son contenu, et la placer dans le code HTML du site, 
à l'endroit où la carte doit être affichée
2. Prendre l'ensemble des balises scripts dans leur intégralité et les copier à la fin de la balise `<body>` de la page
3. Prendre l'ensemble des balises <link> et <style> en haut de page et les mettre dans la balise <head> du site si possible,
sinon avant la `<div class="unesco-map-container">`. 
4. Le tour est joué, la carte devrait s'afficher (tant que la div qui contient la `<div id='map' ...></div>` a une taille
suffisante).
 
## Origine des données

Les données proviennent maintenant d'un fichier GoogleSheet qui est récupéré en CSV.
Le lien du fichier : https://docs.google.com/spreadsheets/d/1g93Y3vQMHQpJ8tNfCfTFkl51MiwHSgZBkKj9NSAnjK8

L'ajout d'organisation peut donc se faire directement depuis ce fichier

### Récupération des coordonnées via ChatGTP

Si jamais vous vouliez ajouter beaucoup d'organisations d'un coup, vous pouvez essayer de récupérer leurs coordonnées 
via ChatGPT avec le prompt suivant:

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

