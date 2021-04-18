# **Le JAVA SCRIPT**

## La différence entre JAVA et JavaScript .


**Java** : langage de programmation **orienté objet** ( langage compilé ) utilisé pour écrire des applications pour ordinateur de bureau ( smartphone , tablettes )  et autres applications.

**ils n’ont rien en commun.**

**Javascript** : langage de programmation (**langage de scripting**)  **web côté client** (vers le navigateur de l’internet, là où il sera exécuté)  qui va permettre de définir le comportement des éléments de notre page.
Exécution du code en réponse à des événements et pas seulement l’événement “click”.

Conçu pour interagir principalement avec une page web. modifier son contenu

Pour faire la différence.

Le **HTML et le CSS** sont respectivement des langages de **contenu et de présentation** . Ce sont des **langages déclaratifs** et non pas de programmation comme java ou javascript.


# **Bref historique Javascript .**

D’abord **moka**, puis **livescript** est passé par le nom javascript en 1996 . ( choix marketing en rapport à JAVA )

1997 ECMAscript ( norme en constante évolution qui évolue maintenant vers **ES Next** ) créer un standard java script.

1999 La plupart des navigateurs intègrent la norme ECMAscript pour java script.

Mais il existe différent moyen de transpiler ( changer de version à une autre ).

**Babel** l’un des plus connus permet de transpiler le code.

Premier pas avec Javascript.

Il faut tout d’abord utiliser un éditeur de code . visual studio code par exemple.

**Les installations indispensables:**
extension à installer sur visual studio code.
-**live server** .
-**node.js** qui permet d’exécuter du javascript en dehors du navigateur. Contient aussi les cli (commande line interface ) qui seront très utiles dans l’invite de commande, notamment pour l’utilisation de framework  ( faciliter d’installation ).



# **Injecter du javascript dans du HTML**

Après avoir créée une simple page html,j’utilise la balise **h1 id="heading"**.Ensuite dans le fichier **javascript.js**, j’écris la ligne suivant :
```javascript
document.getElementById("heading").innerHTML = "Une simple page HTML";
```
Peut aussi être écrit de la manière suivante :
```javascript
const heading = document.getElementById('heading');
heading.innerHTML = "Une simple page HTML";
```


Ici **document.getElementById** recherche l’élément qui a l'identifiant **“heading”** d’injecter au chargement de la page grâce à innerHTML  “Une simple page HTML”.

La balise <javascript> pourra être injectée à différent endroit selon le cas et pas seulement tout en bas de la page après le <body>. Nous reverrons cela plus tard mais c’est important de le savoir.


 # **Traitement HTML, téléchargement et exécution du fichier javascript.**
 Traite le code html de haut en bas puis quand il rencontre la balise javascript il va d'abord exécuter celui ci puis ensuite reprendre la lecture du traitement html (le navigateur sera alors bloqué pendant ce temps). Cela peut poser quelques soucis surtout si l’on veut effectuer le téléchargement de manière asynchrone . c’est à dire en parallèle du traitement du HTML;

## Voici comment résoudre ce problème.

ES6 nous propose deux nouveaux mots clés qui vont nous permettre de mieux gérer le téléchargement et l'exécution du fichier javascript.

**Async :**
```javascript
<script src="javascript.js" async></script>
```
Le premier et l’élément Async qui va nous permettre de télécharger le fichier js tout en continuant le traitement du HTML mais ne permet pas l’exécution du fichier js en même temps.

**Defer :**
```javascript
<script src="javascript.js" defer></script>
```
Pour defer c’est la même chose sauf qu’il permettra le téléchargement et l’exécution du fichier js tout en continuant le traitement du HTML. Donc c'est principalement defer qui sera utiliser le plus couramment.
Le problème est donc réglé de très belle manière. Merci ES6 ;) .

## Commenter son code en JS :

C’est très important de commencer son code. Déjà pour nous même ( pense bêtes, explication du code écrit…) . Parfois on commence un projet et on ne revient dessus que plusieur jours après, voir plus . Les commentaires vont nous permettre de gagner un temps consécutif pour reprendre le projet rapidement.

Mais c’est aussi utile quand d’autre développeur travaille sur votre projet . Cela leurs permet de bien comprendre ce que vous faite . Encore une fois c’est un gain de temps .

**Voici comment commenter son code :**

Commentaire sur une ligne :
```javascript
//document.getElementById("heading").innerHTML = "Une simple page HTML";
```

Commentaire sur plusieurs lignes :
```javascript
/* un commentaire
sur plusieurs ligne*/
```

# **Créer des variables :**

Quand vous codez vous avez besoin de stocker des données et d’y avoir accès facilement et rapidement et voilà la raison d'être des variables.

 **Une variable peut principalement stocker une ou plusieurs données :**
. des nombres ou Number
. Des chaines de caractères ou string
. Des boléan ou true et false
. des tableau nommées par des  crochets [ ]
. des dictionnaires nommées par des guillemets { }

Une variable va simplement nommer un emplacement dans la mémoire de l’ordinateur :
```javascript
const firstName= "case";
```
On declare puis initialise une variable.

Il faut savoir que le JavaScript est un langage faiblement typé.

Nous pouvons utiliser l'opérateur "**typeof**" qui va nous permettre de savoir quel type de donnée est stockée dans une variable.

exemple :
```javascript
const firstName = '';
console.log(typeof (firstName));
```
**Enfin il existe les boléens** **true** et **false**

 Et voici les **six** résultats qui renvoient **false**
```javascript
const base = null; // "", false, undefined, Nan, 0
const bool = Boolean(base);
console.log(bool);  // expected output : false
```

## Créer un tableau en javascript

remarque que la clé, valeur de "red" est zéro
```javascript
const colors = ["red", "blue", "green"];
console.log([2]); // expected output : green
```

## Créer un objet en javascript
```javascript
const person = {            // dictionnaire
    firstName: "damien", // propriété
    lastName: "brui",
    age: 43,
    sex: "M",
}
console.log(person);
console.log(person.firstName);
console.log(person['age']);
```
# **L'instruction While et Do while en javascript**

Permet de faire une boucle , d'itérer sur une propriété.

## **While**
```javascript
const a = 1;
while (a < 10) {
    console.log(`La valeur de la variable a est ${a}.`);
    a++;
}
console.log("boucle terminé");
```
## **Do While**
```javascript
const a = 1;
do {
    console.log(`avec do while la valeur de a reste la même seul la forme change. a vaut ${a}`);
    a++;
} while (a < 10)
console.log("Boucle do while terminée");
```
# **L'instruction For en javascript**
Instructions permettant une itération (répétition d'instruction)
```javascript
for ([expressionInitiale]; [condition]; [expressionIncrément])
instruction

let str = '';
for (let i = 0; i < 9; i++) {
    str = str + i;
}
console.log(str);
expected output: "012345678"
```
## Instruction For avec le mot  clé continue

**Continue** permet ici de sortir la valeur 5 de la boucle.
La 5 ièmes boucles n'apparaitra pas dans la console.
```javascript
for (i = 1; i < 10; i++) {
    if (i == 5) {
        continue;

    } console.log(`avec continue on constate que l'on sort de l'itération et i vaut ${i}`);
}
```
## Instruction for avec le mot  clé break

**break** quand à lui permet de sortir de la boucle a la 4 ième itération.
```javascript
for (i = 1; i < 10; i++) {
    if (i == 5) {
        break;

    } console.log(`avec continue on constate que l'on sort de l'itération et i vaut ${i}`);
}
```
## For pour itérer sur un dictionnaire, tableau ou objet

Ici "prop" et la clé , "person" est l'objet est  `${person[prop]}`  et la valeur de la proriété de l'objet
au moment de l'itération.
Lors de la première boucle, expect output = La valeur de la clé firtName est damien.
```javascript
    const colors = ["red", "blue", "green"]; // tableau

    const person = {            // dictionnaire
        firstName: "damien", // propriété
        lastName: "brui",
        age: 43,
        sex: "M",
    }
    console.log(person);
    console.log(person.firstName);
    console.log(person['age']);
```
------------------------------------
```javascript
for (color in colors) {
    console.log(`la couleur est ${colors[color]}`);
};

for (prop in person) {
    console.log(`La valeur de la clé ${prop} est ${person[prop]}`)
};
```

# **L'instruction if en javascript**

L'instruction if exécute une instruction si une condition donnée est vraie ou équivalente à vrai.
Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

```javascript
if (condition) {
    instructions1
    } else {
    instructions2
}
```

# **Les fonctions dans le javascript**


Bloque de code auquel je peux donner un nom et l'appeler plusieurs fois.

**Fonction la plus simple**

```javascript
function addNumbers(num1, num2) {
    result = num1 + num2;
    console.log(result);
}

addNumbers(2, 6);  //ici j'envoie les paramètres dans la fonction.
addNumbers(10, 5);
```
-----------------------
```javascript
function multNumbers(num1 = 2, num2 = 5) {
    let results = num1 * num2;
    return results;  Ici on aloue la mémoire de l'ordinateur avec l'aide du mot clé return
};
let addMultNumb = multNumbers(10, 10) // Ici j'affecte le résultat de la fonction à addMultNumb

console.log(addMultNumb);
```
-------------------------------
```javascript
function testNum(a) {
    result;
        if (a > 0) {
            result = 'positive';
        } else {
            result = 'NOT positive';
        }
            return result;
}
testNum(-5);
console.log(testNum()); expected output : NOT positive
```
## **Déclarer et éxecuter en même temps une fonction.**


IIFE Immediately Invoked Function Execution.
Fonction anonyme qui ne sera éxecutée qu'une seul fois.

```javascript
Instrucion : (function(){})();
(function () {
    result = 2 + 4;
    console.log(result);
})();
```
----------------------------------
```javascript
(function (num1, num2) {
    result = num1 / num2;
    console.log(result);
})(10, 2)
```

---------------------------------------
**Fonction à flèche.**
```javascript
((para3, para4) => {
    var result = para3 / para4;
     console.log(result);
})(1000, 2);
```

# **OBJET et METHODE**

Un objet en java script est une entité qui possède des **propriétés** et des **méthodes**.


Voici des méthodes courantes pour les objets. il en existe beaucoup d'autres.
```javascript
let colors = ["red", "blue", "green"];

colors.push("orange"); Dans la console rajoute "orange" à la fin du tableau
colors.unshift("violet"); Rajouter "violet" au debut du tableau
colors.shift(); Retire le premier élément du tableau
colors.pop(); Retire le dernier élément du tableau
colors.reverse(); Inverse l'orde des éléments du tableau.
console.log(colors);
console.log(colors.length); Renvoi la longeur du tableau
console.log(colors.join( '-' ));
```



# **l'Objet Math **
Il est déclaré nativement.
L'objet Math est utile en mathématique avec différentes méthodes comme :

* Math.max() : renvoi le nombre le plus évelé .
* min() : renvoi la valeur minimal.
* round() : renvoi a l'unité supérieur ou inférieur.
* ceil() : arrondi vers l'unité supérieur
* floor() : arrondi vers l'unité inférieur
* random() : renvoi un nombre aléatoire entre 0 et 1

```javascript
let a = 2.2, b = 6, c = 3, mynumber;
mynumber = Math.max(a, b, c); //renvoie le nombre

console.log(mynumber);
```
# **L'ojet Date**

**Exemple le plus simple :**

Pour obtenir la Date et l'heure actuelle de l'europe centrale avec l'objet **new Date()**
```javascript
let today = new Date();
let birthday = new Date(1976, 03, 05, 15, 30);

console.log(today.getTime());
```
# **Le BOM**

Le Browser Object Model.

Window est l'élément le plus haut dans la hierarchie puis il y a les sous éléments comme window.location.

L'objet window  et ses propriétées, notamment window.document. Le plus important.

    console.log(window); Voir toutes les méthodes que nous offres cette objet.

Ce qui nous intéressent surtout c'est **window.document.** La page visible par l'internaute.



# **Le DOM : Document Objet Modèle**

**Expliquons ces trois éléments**

* Le document :
Il représente la page Web, son contenu tel que le code source ou la page web tel que vue par l'internaute.

* L'Objet :
Un objet c'est plusieurs éléments différents. Ici on parle de titre **h1** ou de liste **ul** par exemple

* Le modèle :
C'est une convention qui ici est vue comme une structure tel un arbre.
On parle ici de noeuds, de parents et d'enfants. Le **body** ici est le parent et le titre **h1** est un enfant.



**Récupérer les éléments dans le DOM**
```javascript
let header = document.getElementById('mainFooter');
let active = document.getElementByClassName('active');
let footer = document.getElementById('mainFooter');
let par = footer.getElementsByTagName('p');
```
**Exemple avec document.querySelector**
```javascript
<header id="mainHeader">
let selected = document.querySelector('#mainNav li');
console.log(selected);
let select = document.querySelectorAll('#mainNav li')
let mainP = document.querySelector('#pageContent main p')
mainP.setAttribute('align','right');

console.log(mainP);
```
# **Créer de nouveaux éléments dans le DOM**



**Voici comment créer différents objets que l'on inject ensuite dans le DOM**

* Créer l'élément a

        let elemA = document.createElement('a');

* Changer l'attribut href de l'élément a

        elemA.href = 'produit.html';

* Créer un textNode


        let linkLabel = document.createTextNode('Produits');

* Ajouter le text à l'élément a

        elemA.appendChild(linkLabel);

* Créer un élément li

        let elemLi = document.createElement('li');

* Ajouter l'élément a à l'élément li

        elemLi.appendChil(elemA);

* Rechercher l'élément ul et y ajouter l'élément li créé plus tôt

        document.querySelector('#mainNav ul').appendChild(elemLi);

# **Modifier le style CSS à partir du javascript**

Il suffit d'allé rechercher l'élément et de l'initialiser avec une nouvelle valeur grace à l'objet **style.**
```javascript
    let pageContent = document.getElementById('pageContent');
    pageContent.styleBackgroundImage = 'url(/src/...)

    console.log(pageContent);
```

# **Document.querySelector**

L'objet document.querySelector ou document.querySelectorAll(récupérer plusieurs objets) nous permet de sélectionner l'objet sur lequel nous aimerions travailler .
```javascript
let galImages = document.querySelectorAll('#singleGallery img');
for (image of galImages) {
    image.onclick = () => {
        alert('Bonjour !');
    }
}
```
# **addEventListener**
Il a besoin de **3 paramètres.**
Le **nom** de l'événement à écouter . ici 'click'
La **fonction** qui sera éxecutée quand cet événement aura lieu.
Le 3 ième paramètre **true ou false** . ici toujours false
```javascript
    let galImages = document.querySelectorAll('#singleGallery img');

    for (i = 0; i < galImages.length; i++) {
        let image = galImages[i];
        image.addEventListener('click', () => { alert('Bonjour') }, false);
        image.addEventListener('click', () => { alert('Au revoir') }, false);
    }
```
    console.log(galImages);

# **Ecouter un événement sur le click**

Inspecter les propriétés des événements afin de récupérer les informations.
Les **événements** ont leurs propres **objet et méthodes**.
Dans notre cas celui qui recoit l'objet événement est **showSinglePict**.
Pour avoir accés aux propriétées il suffit d'utiliser l'objet **"event" ou "ev" ou "e"**.
Dans la console nous retrouvons beaucoup de propriété et celle qui nous intéresse c'est la méthode **target**,
donc **e.target** nous permets de **récupérer les informations de l'image** sur laquel nous venons de cliquer.
```javascript
function showSinglePict(e) {
    let image = e.target;
    console.log(image);
}
```

# **Emettre un comportement sur le Click**

Quand je clique sur une image . celle ci s'agrandis grace à la méthode **classList.toogle** (allumer ou éteindre selon que soit allumé ou éteint).
Grace au comportement de ces différents objets (gallery container, gallery container img, et gallery container.visible) qui sont définis dans le css.

```javascript
function showSinglePict(e) {
let image = e.target
let imageContainer = document.getElementById('galleryContainer');
let bigImage = imageContainer.querySelector('img');
bigImage = image.src;
imageContainer.classList.toogle('visible');
imageContainer.addEventListener('click', closeSinglePict, false);
}
```
------------------
```javascript
function closeSinglePict() {
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toogle('visible');
}
```
# **ONLOAD**
L'objet **LOAD** permet d' **exécuter du code** lors du **chargement** de la page.
Ici il va nous permettre d'afficher gallerie 1 ou gallerie 2 sur la même page. singleGallery.

```javascript
window.addEventListener('load', () => {
    let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}'
    let galleries = JSON.parse(galleriesRaw);
    let searchParams = new URLSearchParams(window.location.search);
}
```

L'objet **URLsearchParams** permet de **rechercher** les informations contenu dans l'URL.
L'objet **window.location** permet d'obtenir toutes les informations contenu dans l'url.
La propriété qui va nous intéressé est **search** et donc **window.location.serch** permet de récupérer la valeur de la gallerie affiché après l'avoir transformer(parse).

```javascript
if (searchParams.has('id')) {
    let galId = searchParams.get('id');
     console.log(galId);
} else {
    window.location.pathname = 'galleries.html'
    };
}, false);
```

La méthode **get** permet de récupérer la valeur du paramètre ID.
L'objet **window.location.pathname** redirige l'utilisateur vers la page galleries si aucun 'id' n'est    récupéré.
La méthode **has** va permettre de vérifier si il existe un paramètre ID dans l'URL.

# **Créer dynamiquement la liste des images gal1 et gal2.**

Maintenant que nous avons les informations sur L'URL  et que nous avons récupéré l'information "Id" soit
gal1 ou gal2, il nous reste à créer dynamiquement la liste des images.
Ici le code et maintenant plus complet.

```javascript
if (searchParams.has('id')) {
        let galId = searchParams.get('id');
        let galleryToDisplay = galleries[galId];
        let rootUl = document.querySelector('#singleGallery ul');
        let galTitle = document.querySelector('#singleGallery h1');
        galTitle.innerHTML = galleryToDisplay.title;
        for (let i = 0; i < galleryToDisplay.images.length; i++) {
            let theLi = document.createElement('li');
            let theImg = document.createElement('img');
            theImg.src = `images/${galleryToDisplay.images[i]}`;
            theImg.addEventListener("click", showSinglePict, false);
            theImg.style.cursor = 'pointer';
            theLi.appendChild(theImg);
            rootUl.appendChild(theLi);
        }
    } else {
        window.location.pathname = 'galleries.html';
    }
}, false);
```

## Explication sur les lignes de code ci-dessus.

Création de la **variable galleryToDisplay** à qui j'affecte la valeur de la variable galleries a qui j'ajoute l'élément [galid] qui me permet d'afficher la gallerie photo correspondante.
Ensuite je crée les objets dont j'ai besoin. Une liste d'image.

# **Utiliser ONSUBMIT et PREVENTDEFAUTL()**

l'événement **submit** permet de réagir à la soumission du formulaire.
```javascript
let contactForm = document.querySelector('#frmContact');

contactForm.addEventListener('submit', () => {
    alert('merci');
}, false);
```

Pour empécher que l'action par défault et lieu, c'est à dire renvoie vers la page **merci.html** après l'action click, il faut utiliser la méthode **preventdefault()** qui appartient à l'objet **événement**.
```javascript
let contactForm = document.querySelector('#frmContact');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('merci');
}, false);
```

# **Se servir des timers SetTimeout et SetInterval**

Voici deux méthodes qui permettent de gérer un peu mieux les événements.

# **SetTimeout**

SetTimeout qui permet de **différée l'exécution** d'un scripte d'un certain nombre de milisecondes.
SetTimeout a besoin de **deux arguments**.
* La fonction qui sera exécutée.
* Le nombre de milisecondes que je vais attendre avant d'exécuter cette fonction.
Ici le nombre **5000** représente **5 secondes**

```javascript
setTimeout(() => {
    console.log('bonjour');
}, 5000);
```
# **SetInterval**
SetInterval quant à lui **répéte l'instruction** toutes les milisecondes données.
```javascript
let interval = setInterval(() => {
    console.log("interval d' une seconde");
}, 1000);
```
Pour stopper définitivement l'interval on peut utisiler la fonction **clearInterval** ainsi que la méthode **setTimeout**.
```javascript
setTimeout(() => {
    clearInterval(interval);
}, 5500);
```

# **Valider automatiquement un formulaire en HTML**

En Html pour mettre en place les validations automatique il suffit d'utiliser l'attribut **required**.
Facile à mettre en place mais ne permet pas de maitriser tout les aspects de l'expérience utilisateur.
Pour désactiver la validation automatique par le navigateur il suffit d'utiliser l'attribut **novalidate**.


# **Validation formulaire coté JavaScript**

On récupére les informations et on utilise addEventListener, submit et e.preventDefault()
afin d'avoir accés à tous les éléments du formulaire

Récupération de l'objet frmContact
```javascript
let contactForm = document.getElementById('frmContact');

```
Utilisation de la méthode **addEventListener** sur la variable contactForm
```javascript
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
```
Récupération des éléments à vérifier et affectation de la valeur true sur la variable valid
```javascript
let fields = document.querySelectorAll('input[required], textarea[required]');
    let valid = true;
```

Création d'une boucle sur la variable fields grace à la méthode **forEach**
Dans la méthode **validateField** si l'évenement et true la fonction if ne sera pas exécuté.
Si c'est false elle sera exécuté et l'utilisateur ne sera pas redirigé.
```javascript
fields.forEach((field) => { // création d'une boucle sur la variable fields grace à la méthode forEach
        //console.log(field);
        if (!validateField(field)) { // dans la méthode validateField si l'évenement et true la fonction if ne
            // sera pas exécuté. si c'est false elle sera exécuté et l'utlisateur ne sera pas redirectionné.
            valid = false;
        }
    });
```

Vérifiie si valide et toujours égale à true . si c'est le cas on peut soumettre le formulaire.
```javascript
if (valid) {
        e.target.submit();
    }
```

La méthode validateField permet dans le bloc de code d'utiliser un if
celui ci grace a la méthode checkValidity va permettre de returner true ou false
```javascript
function validateField(field) {
    if (field.checkValidity()) {
        return true;
    } else {
        field.classList.add('invalid');
        field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
};

```

# **Générer des messages d'erreur**

Obersvont la méthode vadidateField et expliquons le reste du code ci-dessus.
J'Utilise classList.add('invalid') Lecomportement de invalid est etablis dans le css.
**PreviousElementSibling** permet de travailler sur l'élément qui précède le field actuel, c'est a dire
tout les éléments qui précèdent nos inputs et le textarea.
Dans le dom c'est simplement ici les Labels.
La méthode **insertAdjacentHTML(beforeend, `<span class="msg">${field.validateMessage}</span>`)** je vais injecté de l'html au niveau de ce label.
L'argument **beforeend** me permet de dire ou je vais inséré le code.
 Ici par exemple a la fin du label prenom, donc apres prenom.
Le second argument le span contient une class msg definit dans le css. On va simplement interpoler le résultat si c'est et retourner le message d'erreur généré autotamiquement par le navigateur dans notre cas.
Pour cela on utilise **${field.validationMessage}**

# **Supprimer les messages d'erreur quand ils ne sont pas necessaires**

Il ne faut pas oublier de rajouter la fonction resetField(field)avant la validation de la variable valid = true; de cette manière

```javascript
fields.forEach((field) => { resetField(field) });
```
A noter que l'élément firstElementChild permet de travailler uniquement sur le bloc de code, il ne modifie pas le texte.
```javascript
function resetField(field) {
    let fieldLabel = field.previousElementSibling;
    field.classList.remove('invalid');
    while (fieldLabel.firstElementChild) { // firstElementChild permet de travailler uniquement sur le bloc de code .
        // il ne touche pas au text.
        fieldLabel.removeChild(fieldLabel.firstElementChild);
    } field.valid = true;
}
```


# **Utiliser ONFOCUS et ONBLUR**

Simplement sur un champ de formulaire,
**Focus** et lévénement qui ce produit quand je rentre dans un champ de formulaire.
**Blur** et l'événement qui ce produit quand on quitte le champ de formulaire.

Voici à quoi ressemble le code :
```javascript
let fields = document.querySelectorAll('input[required], textarea[required]');

fields.forEach((field) => {
    field.addEventListener('focus', () => { resetField(field) }, false);
    field.addEventListener('blur', () => { validateField(field) }, false);
});
```
Remaque que la variable fields est sortie de sa méthode et a maintenant une porté global.
Elle sera exécutée au chargement de la page.

## Pour bien comprendre voici le bloc de code en entier
```javascript
let contactForm = document.getElementById('frmContact'); 
let fields = document.querySelectorAll('input[required], textarea[required]');

fields.forEach((field) => {
    field.addEventListener('focus', () => { resetField(field) }, false);
    field.addEventListener('blur', () => { validateField(field) }, false);
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    fields.forEach((field) => { resetField(field) });
    let valid = true; 
        fields.forEach((field) => { 
        if (!validateField(field)) { 
            valid = false;
        }
    });

    if (valid) { 
        e.target.submit();
    }

}, false);

function validateField(field) { 
    if (field.checkValidity()) { 

        return true;
    } else {
        field.classList.add('invalid');
        field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
};
```

# **Qu'est ce qu'un CDN**

Un CDN (réseau de diffusion de contenu) est une plateforme de serveurs hautement distribuée qui permet de réduire les temps de chargement du contenu des pages Web en réduisant la distance physique entre le serveur et l'utilisateur.  
Simplement, c'est un serveur qui héberge des scripts.

# **Aborder JQUERY et les bibliothéques javascript**

JQuery est une bibliothèque JavaScript libre et multiplateforme créée pour faciliter l'écriture de scripts côté client dans le code HTML des pages web.


Tout d'abord il faut simplement copier ce code dans le DOM dans la page index.html et apres avoir crée un nouveau fichier menu.js, rajouter la ligne après le code script si dessous.


```javasript
<script
	src="https://code.jquery.com/jquery-3.5.1.min.js"
	integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
	crossorigin="anonymous">
</script>
<script src=js/menu.js></script>
```

# **Créer un menu déroulant en Jquery**

Voici le code

```javascript
$(document).ready(function () {
    console.log("ready");
    $('#menuToggle').click(function () {
        console.log("click");
        $('#mainNav').stop(true, true).slideToggle();
    });
});
```
A savoir que l'objet slideToggle prends en argument une longeur de temps en miliseconde.

