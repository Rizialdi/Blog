---
date: "27-07-2018"
title: "neural_network"
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

* determiner si une transaction financière est frauduleuse ou pas;
* affirmer l'état de santé d'un individu;
* classer des images de nombres, d'animaux, de fleurs.

## Architecture d'un réseau de neurone

un réseau de neurone se base sur le concept de couches. Ces dernières, permettent une reduction de la dimensionalité, des valeurs d'entrées choisies à la prediction. Elle  sont référencées par :

* la couche d'entrée, valeurs choisies pour la prédiction;
* les couches cachées, la machine interne du réseau;
* la couche de sortie, valeurs discrètes representant une catégorie, ou un groupe.


![images](/static/images/simple_rn.png)

Le nombre de noeuds dans une couche et le nombre de couches sont des hyperparamètres (paramètres dont la valeur est fixée avant que tout processus d'apprentissage ne commence). 

Pour plus:

http://www.asimovinstitute.org/neural-network-zoo/



```python
def moi:
    a = 1 + 3
```