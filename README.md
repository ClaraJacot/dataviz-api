# dataviz-api

*Après 1 mois et demi de formation, novembre 2023*

Projet collectif sur 7 jours sur la visualisation de données et l' utilisation d'api liée à la consommation 
d'eau en France et à Villeurbanne particulièrement.

OBJECTIFS :

-Fetch une API
-Faire de la visualistion de data en temps réel
-Se familiariser avec le local storage
-S'entrainer au HTML/CSS/JS
-Utiliser des bibliothèques JS


DESCRIPTION : 

Un compteur affiche votre conso journalière au moment où vous vous connectez, mais aussi comptabilise la conso perso par seconde pour une prise de conscience plus forte. Idem avec la conso à Villeurbanne. Ces données de compteur sont stockées dans le local storage afin de ne pas perdre le compte si vous actualisez la page.
Grace à l'API Hubeau on récupère également le niveau actuel de l'eau dans la nappe phréatique de Villeurbanne.
Juste en dessous une animation en CSS montre la nappe phréatique qui se vide.

L'eau qui s'égoutte de la nappe, est bien sûr prélevée pour les activités humaines. La vitesse des gouttes est proportionnelle à la consommation d'eau des différentes activités humaines représentée sur le graphique.

Le dernier graphique est l'évolution en "temps réel" (mise à jour chaque mardi à 14h) du niveau piezométrique de la nappe de Villeurbanne. On peut ainsi constater l'évolution au fil des heures, des jours, des saisons.


OUTILS :

Bibliothèques utilisées : Chart.js et Anime.js

Api utilisée: https://hubeau.eaufrance.fr/page/api-piezometrie






