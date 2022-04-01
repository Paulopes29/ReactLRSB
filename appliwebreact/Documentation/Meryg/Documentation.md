Fonctionnalités : 

- Utilisation de l'API openweathermap (onecall) pour afficher la météo du lieu ou l'on est. Affichage de la température/humidité/risque de pluie du jour ainsi que température des prochains jours. Pas mal de temps perdu dessus car au début j'affichais simplement le jour même et le fait de changer de requête pour l'API a fait que j'ai du grandement adapter mon code. (L'API utilisée est très limité en terme de requêtes donc j'ai eu recous à ce type de fonction : **meteo && meteo.daily.slice(0, 1).map((d) => (d.snow))**)
- Utilisation de l'API saurav.tech pour récupérer l'actualité du jour  
- Utilisation de fetch et useEffect
- Utilisation des routeurs pour afficher mes pages
- J'ai essayé de faire un affichage assez joli pour la météo. Pour ce qui est de la page actualités j'ai fait au mieux

Problèmes rencontrés :   
Je ne pratique jamais le react en entreprise. Je possédais que des connaissances limitées vis à vis du react (grâce au cours de l'année dernière)  
Ce que j'ai appris :  
- utilisation de useEffect (je ne connaissais absolument pas). J'ai mis un peu de temps à comprendre
- module CSS, ce n'est pas très compliqué
- les routeurs

Niveau syntaxique, pas trop de problèmes ! 
