---
date: "14-06-2018"
title: "Apprendre Redux"
tag: ["redux", "javascript", "flux", "application"]
url: "http://drasselio.me/Posts/Apprendre_Redux"
---

Plusieurs developpeurs se demandent ce qu'est Redux ? D'autres le voit comme une autre librairie à apprendre pour être capable de developper l'application de leur rêve. 

Ne vous en faites pas, à la fin de ce post, vous comprendrez ce qu'est Redux, le problème qu'il aide à résoudre, et dans quels cas commencer à l'utiliser .

## Redux

Redux est une librairie *Javascript*, dont le but premier est la gestion de l'*état* de notre application. L'*état* ou *state* represente l'ensemble des données d'une application à un moment de son fonctionnement. Une des raisons pour lesquelles une application peut arreter de fonctionner subitement, ne plus repondre à toute manipulation est la mauvaise gestion de son *state*. C'est generalement pour cela, que redemarrer une application suffit pour qu'elle se remette à fonctionner normalement. 

L'origine des bugs est la mauvaise gestion du *state* comme enoncé plus haut. Pour rendre ce dernier plus *predictif*, l'utilisation de  *fonctions pures* est necessaire.

Dans une application *React* (si vous n'avez jamais entendu parler de React,ou pour un refresher, il y a un post la-dessus - *React*), les *components* communiquent à l'aide de *propriétés*. Bien que ces dernieres peuvent aller des parents aux enfants et des enfants aux parents, la recommandation est la première. Les données doivent descendre l'arbre. Considerons hypothetiquement que notre application possède plusieurs *components* dont 2 necessitent de communiquer. Si le nombre de couches separant ces *components* n'est pas grand, on peut encore s'en sortir avec l'une ou l'autre des deux méthodes de transfert de données; cependant, cette état de chose devient très vite impossible à gerer lorsque la complexité de l'application croît et notre application deviendrait *non predictive*.

Redux qu'inspire de *Flux* permet de garder le *state* dans un endroit unique et seulement accessible à travers des chemins precis. Il n'est pas depedant d'une architecture, et peut s'utiliser avec d'autres librairies chargées de la vue de l'application. Son adaptation pour *React*, *react-redux* fera l'objet d'une attention particulière plus loin.

Redux a trois elements clés dans son fonctionnement : 

* **action**
* **reducer**
* **store**

Une *action* est un object qui décrit explicitement ce qui vient de se passer dans l'application. Il est necessaire pour le changement du *state*. Pour l'imaginer conceptuellement, on peut voir une *action* comme une capsule contenant des informations sur ce qui vient de se produire. Une action contient obligatoire l'attribut *type*, le reste n'incombe qu'au developpeur.

```javascript
const action = {
    type : 'LIKE_POST'
    // autre attributs ou objets 
}
```

Un *reducer* decrit comment le *state* de l'application change en fonction de l'*action* qui est reçue. L'*action* decrit simplement ce qui s'est passé, mais pas comment le *state* de l'application repond. Le *reducer* prend comme arguments, un *state* et une *action* et renvoi un nouveau *state* - *(previousState, action) => newState* - pour l'application. Ici, bien noter le fait qu'un nouveau *state* est renvoyé, et non une *version modifiée* du précédent. Redux utilise des pures fonctions pour ne pas muter le *state*, ainsi pas de surprises, pas d'effets secondaires.

Le *store* est le coeur de l'application dans cette architecture. Il est chargé de *fournir* les données qu'il contient, aux *components* qui en ont besoin lorsque qu'un *événement survient*.

![images](/static/images/store_representation.png)

Le *store* possède 3 fonctions pour communiquer avec les *components*:

* *get()*, pour permettre l'acces au valeurs stockées;
* *listen()*, pour notifier les *components* enregistrés qu'un changement de *state* a eu lieu;
* *update()*, pour changer les valeurs des *components* enregistrés au store.

Maintenant que toutes les pièces ont été vues, un diagramme les regroupant est necessaire:

![images](/static/images/redux_representation.png)

* l'*utilisateur* interagit avec l'*UI* et déclenche une *action*;
* l'*action* contient le *type* et les autres attributs définit par le developpeur;
* le *reducer* reçoit cette action et change le *state* de l'application en renvoyant un *nouveau state*;
* le *nouveau state* renvoyé est stocké dans le *store* à l'aide de la fonction *update()*. Les fonctions *listen()* notifient un changement de *state* aux *components* qui en ont besoin;
* la fonction *get()* permet finalement de recuperer le nouveau *state* et changer les valeurs des *components*

## Quand commencer à l'utiliser

Une question que beaucoup de personnes qui ont entendu parler de la librairie de gestion d'*état*,*Redux* se posent. Les avis dans la communauté divergent à cet égard, cependant des lignes directrices sont partagées:
* **Lorsque plusieurs parties d'une application ont besoin de la meme donnée**. Cela arrive très souvent lorsque l'on partitionne l'interface graphique en tout petits *components*. C'est la l'idée d'une seule *source de vérité* dans l'application. 

* **Lorsqu'il ya des props qui doivent traverser plusieurs couches pour arriver aux *components* visés**. La maintenance sans l'utilisation de *Redux* deviendrait bien vite *impossible*.

* **Lorsque differentes pages de l'application partagent un objet -- *le cache***. Cela est facilement observable dans les applications avec l'idée de *panier*.

Penser à utiliser *Redux* quand il est absolument necessaire. Ainsi, son utilité sera propement mesuré et ne sera pas un handicap. Il est facile de tomber dans ce piège, et des questions de *sur-ingenieurie* d'une application entrainent plus de mal que de bien.
[//TODO]: # (post pour pure function)
