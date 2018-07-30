---
date: "27-07-2018"
title: "Neural Network"
tag: ["neural", "ai", "network", "machine_learning"]
url: "http://drasselio.me/Posts/Neural_Network"
---

Le cerveau ou  l'ordinateur me diriez-vous ? La pensée collective tend à vouloir un cerveau possédant la capacité d'un ordinateur pour calculer ou réaliser des taches complexes. En regardant de près les récentes avancées dans les algorithmes d'apprentissage automatique, on découvre que les scientifiques essaient d'imiter le fonctionnement d'un cerveau. Cela se fait par l'intermediaire de *réseaux de neurones artificiels* (ou artificial neurone network ANN). 
Ne vous en faites pas, à la fin de ce post, vous comprendrez ce qu'est un réseau de neurones artificiel, les problèmes qu'il aide à résoudre, et les précautions à prendre lors de son utilisation.

## Neurone formel et artificiel

Un neurone formel est une cellule excitable constituant l'unité fonctionnelle de base du système nerveux. Le traitement et le transfert de l'information dans le cerveau se fait par l'intermédiaire de signaux d'un neurone au suivant à travers d'un synapse. Chaque neurone comprend :
* un **noyau** contenu dans le corps de la cellule; 
* des **dendrites** qui sont les entrées et conduisent l'information au corps de la cellule; 
* un **axone** qui est la sortie  et transporte l'information vers le neurone suivant.

Image d'un neurone formel: ![image d'un neurone formel](https://alzheimer8.webnode.fr/_files/200000020-bc82bbd7d2/schema-neurone1.gif)


Un neurone artificiel est l'unité de base d'un réseau de neurone. Il imite la manière de fonctionner d'un neurone formel. On peut le comprendre comme un élément contenant un nombre, variant de 0 à 1, qui détermine sa probabilité ou la force du signal.

![images](/static/images/neurone_artificiel.png)

## Utilisation d'un réseau de neurone

Un réseau de neurone est utilisé pour realiser des *classifications*. Il s'agit d'un algorithme d'apprentissage supervisé (apprentissage à l'aide des reponses). La classification peut etre utilisée pour : 

* déterminer si une transaction financière est frauduleuse ou pas;
* affirmer l'état de santé d'un individu;
* classer des images de nombres, d'animaux, de fleurs, etc.

## Architecture d'un réseau de neurone

un réseau de neurone se base sur le concept de couches. Ces dernières, permettent une reduction de la dimensionalité, des valeurs d'entrées choisies à la prédiction. Elle  sont référencées par :

* la couche d'entrée, valeurs choisies pour la prédiction;
* les couches cachées, la machine interne du réseau;
* la couche de sortie, valeurs discrètes représentant une catégorie, ou un groupe.


![images](/static/images/simple_rn.png)

Le nombre de nœud dans une couche et le nombre de couches sont des hyperparamètres (paramètres dont la valeur est fixée avant que tout processus d'apprentissage ne commence). Ces derniers restent constant et ne sont point changés pendant l'entrainement du réseau.
La valeur prise par un neurone de la couche *n* provient de la somme ponderée des neurones de la couche *n-1* à laquelle on applique une [fonction d'activation](https://fr.wikipedia.org/wiki/Fonction_d%27activation). La fonction d'activation dans un réseau de neurone artificiel, similaire au potentiel d'activation en biologie, est le seuil minimal à atteindre pour declencher une réponse du neurone. Bien que plusieurs fonctions d'activation existent, celle choisie est la [sigmoïde](https://fr.wikipedia.org/wiki/Sigmo%C3%AFde_(math%C3%A9matiques)) encore appelée fonction logistique ou courbe en S. Ce choix se justifie par l'analogie avec un neurone formel, pour lequel la relation entre la fréquence d'activation et la tension d'entrée est une courbe en S.

L'image suivante resume la succession de calculs qui s'opère pour un noeud d'une couche à partir des nœud de la couche précédente: 


![images](/static/images/calcul_valeur_neurone.svg)

avec b, appelé le seuil (bias), permettant de corriger des aberrations et contrôler l'inactivité du noeud.

Dès à présent, la constitution d'une réseau de neurones et son fonctionnement sont compris. Cependant comment comparer la prédiction entre deux réseaux de neurones de nombres de couches et de nœud différents ? Comment déterminer les paramètres optimaux pour un réseau de neurones ? 

## Cost Function 

Dans l'apprentissage supervisé, les variables d'entrées et les variables de sorties sont fournis pour la phase d’entraînement et l'algorithme d'apprentissage est utilisé pour déterminer le lien, la relation entre ces dernières. La performance d'un algorithme se mesure par sa capacité à approximer les variable de sortie à l'aide des variables d'entrée lors de la phase de prédiction. La fonction de coût (cost function) est une formule mathematique permettant de d'estimer le coût total d'une prédiction donnée et le but de toute optimisation est la diminution de cette dernière. 

Les données d'entrée et de sortie fournies pour l'apprentissage, seuls les parametres **poids d'une connexion synaptique** et **seuil d'activation** sont ajustables pour l'optimisation. On peut comprendre ce qui se passe en visualisant un ensemble de molettes qui s'ajustent de manière optimale.

 Aussi, la complexité d'un réseau neuronal peut permettre de saisir des nuances entre les variables d'entrée et de sortie. En effet, on peut s'attendre qu'un réseau à deux couches cachées prédise différement qu'un autre possédant dix couhes cachées. [La multitude d'architectures existantes](http://www.asimovinstitute.org/wp-content/uploads/2016/09/neuralnetworks.png) et de leurs variantes a donné naissance à l'apprentissage profond (deep learning) 

Pour plus:

http://www.asimovinstitute.org/neural-network-zoo/



```python
def moi:
    a = 1 + 3
```