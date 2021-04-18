//document.getElementById("heading").innerHTML = "Une simple page HTML";



/* un commentaire
sur plusieurs ligne
const heading = document.getElementById('heading');
heading.innerHTML = "Une simple page HTML";

// alert("bonjour de javascript");
console.log("bonjour de javascript");
console.info("info");
console.warn("warning");
console.error("error");

let value = '';
console.log(typeof (value));  // expected output : undefined

const firstName = "case", lastName = "wil";
resultat = `Mon nom est ${firstName} \net mon prenom est ${lastName}.`; // interpolation
console.log(resultat);

let i = 1;
i++ // incrementation
i-- // décrémentation

const base = null; // "", false, undefined, Nan, 0
const bool = Boolean(base);
console.log(bool);  // expected output : false




/* objet

const person = {            // dictionnaire
    firstName: "damien", // propriété
    lastName: "brui",
    age: 43,
    sex: "M",
}
console.log(person);
console.log(person.firstName);
console.log(person['age']);





// boucle while et do while (while === tant que)

let a = 1;
while (a < 10) {
    console.log(`La valeur de la variable a est ${a}.`);
    a++; // si on oublie d'itéré ainsi nous créeons une boucle infini . en effet impossible de sortir
    // de la boucle.
}
console.log("boucle while terminée");

let b = 1;
do {
    console.log(`avec do while la valeur de a reste la même seul la forme change a vaut ${a}`);
    b++;
} while (b < 10)
console.log("Boucle do while terminée");

// for et if  (petite fonction qui renvoi undefined)

let c = 2, d = 1
if (c = d) { console.log("reponse true"); } // erreur ici au niveau de l'opérateur qui est un opérateur d'affectation "="
// expected output : true
// le bonne opérateur est "===" opérateur de comparaison . expexted output "réponse false"
else { console.log("réponse false"); }

// même exemple avec un for

const e = 1;
for (i = 1; i < 10; i++) {
    console.log(`La valeur de a est ${i}`);
}

for (i = 1; i < 10; i++) {
    if (i == 5) {
        continue; // continue permet ici de sortir la valeur 5 de la boucle.
        // La 5ièmes boucles n'apparaitra pas dans la console.

    } console.log(`avec continue on constate que l'on sort de l'itération et i vaut ${i}`);
}
console.log("boucle finit");

for (i = 1; i < 10; i++) {
    if (i == 5) {
        break; // break permet de sortir de la boucle a à 4ieme itération.


    } console.log(`avec continue on constate que l'on sort de l'itération et i vaut ${i}`);
}
console.log("boucle finit");

let str = '';
for (i = 0; i < 9; i++) { // instructions permettant une itération (répétition d'instruction)
    str = str + i;
}
console.log(str);
// expected output: "012345678"



const f = -5;
function testNum(a) {
    let result;
    if (f > 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    }
    return result;

}
console.log(testNum(-5));

// expected output: "NOT positive"

function testNum(a) {
    let results;
    {
        results ? 'positive' : 'NOT positive';   // opération ternaire

    }
    return results;
}

console.log(testNum(-5));
// expected output: "NOT positive"

// itérer sur un objet
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

// itérer sur un objet
for (color in colors) {
    console.log(`la couleur est ${colors[color]}`);
}

for (prop in person) { // Ici "prop" et la clé , "person" est l'objet est ${person[prop]} et la valeur de la proriété de l'objet
    // au moment de l'itération. donc lors de la première boucle
    // expect output = La valeur de la clé firstName est damien.
    console.log(`La valeur de la clé ${prop} est ${person[prop]}`)
}
*/
//  LES FONCTIONS

// fonction la plus simple


function addNumbers(num1, num2) {
    result = num1 + num2;
    console.log(result);
}

addNumbers(2, 6); // ici j'envoie les paramètres dans la fonction.
addNumbers(10, 5);


function multNumbers(num1 = 2, num2 = 5) {

    let results = num1 * num2;
    return results; // Ici on aloue la mémoire de l'ordinateur avec l'aide du mot clé return
}

let addMultNumb = multNumbers(10, 10) // Ici j'affecte le résultat de la fonction à addMultNumb

console.log(addMultNumb);

// déclarer et éxecuter en même temps une fonction.
//IIFE Immediately Invoked Function Execution.   (function(){})();
// Fonction anonyme qui ne sera éxecutée qu'une seul fois.

/*
(function () {
    result = 2 + 4;
    console.log(result);
})();

(function (num1, num2) {
    result = num1 / num2;
    console.log(result);
})(10, 2)
*/
// Fonction à flèche.

((para3, para4) => {
    var result = para3 / para4;
    console.log(result);
})(1000, 2);

// La portée des variables.

// Une variable déclarée en dehors d'une fonction à une porté dite "global". tout script peut modifier la variables
//visible depuis l'extérieur et l'intérieur d'une fonction.
// Si la variable et d'éclarer à l'intérieur d'une fonction, elle ne sera pas accessible en dehors de la fonction.
// Un console.log(result) en dehors de la fonction renvoit undefined parceque à ce moment là,
// la variable n'existe plus dans le navigateur.
// let permet de bloquer la porté de la variable uniquement sur le bloc de code.


// OBJET et METHODE
// l'Objet Math est déclaré nativement.
// L'objet Math est utile en mathématique avec différentes méthodes comme :

// Math.max() renvoi le nombre le plus évelé .
//.min() renvoi la valeur minimal.
//.round() renvoi a l'unité supérieur ou inférieur.
// .ceil() arrondi vers l'unité supérieur
//.floor() arrondi vers l'unité inférieur
// .random() renvoi un nombre aléatoire entre 0 et 1
//


//let colors = ["red", "blue", "green"];

// colors.push("orange"); Dans la console rajoute orange à la fin du tableau
// colors.unshift("violet"); Rajouter au debut du tableau
// colors.shift(); Retire le premier élément de du tableau
//colors.pop(); Retire le dernier élément de du tableau
//colors.reverse(); Inverse l'orde des éléments du tableau.
//console.log(colors);


// exemple methodes dif
//console.log(colors.length);
//console.log(colors.join( '-' ));



let a = 2.2, b = 6, c = 3, mynumber;

mynumber = Math.max(a, b, c); //renvoie le nombre

console.log(mynumber);

// L'ojet Date

let today = new Date();
let birthday = new Date(1976, 03, 05, 15, 30);


console.log(today.getTime());
console.log(birthday);

/*
let header = document.getElementById('mainFooter');
let active = document.getElementByClassName('active');
let footer = document.getElementById('mainFooter');
let par = footer.getElementsByTagName('p');

console.log(footer);
*/
let selected = document.querySelector('#mainNav li');
console.log(selected);
let select = document.querySelectorAll('#mainNav li')

let mainP = document.querySelector('#pageContent main p')
mainP.setAttribute('align', 'right'); // permet de modifier l'élément selectionner. ici "p".
// qui sera aligné à droite dans le DOM.
mainP.align = 'right'; //Même résultat qu'au dessus.
console.log(mainP);

//Voici comment créer différents objets que l'on inject ensuite dans le DOM
/*
// Créer l'élément a
let elemA = document.createElement('a');
// Changer l'attribut href de l'élément a
elemA.href = 'produit.html';
// Créer un textNode
let linkLabel = document.createTextNode('Produits');
// Ajouter le text à l'élément a
elemA.appendChild(linkLabel);
// Créer un élément li
let elemLi = document.createElement('li');
// Ajouter l'élément a à l'élément li
elemLi.appendChild(elemA);
// Rechercher l'élément ul et y ajouter l'élément li créé plus tôt
document.querySelector('#mainNav ul').appendChild(elemLi);
*/

const colors = ["red", "blue", "green"]; // tableau

const person = {            // dictionnaire
    firstName: "damien", // propriété
    lastName: "brui",
    age: 43,
    sex: "M",
}
for (color in colors) {
    console.log(`la couleur est ${colors[color]}`);
}

for (let prop in person) { // Ici "prop" et la clé , "person" est l'objet est ${person[prop]} et la valeur de la proriété de l'objet
    // au moment de l'itération. donc lors de la première boucle
    // expect output = La valeur de la clé firstName est damien.
    console.log(`La valeur de la clé ${prop} est ${person[prop]}`)
}
/*# ** Modifier le style CSS à partir du javascript **

    Il suffit d'allé rechercher l'élément et de l'initialiser avec une nouvelle valeur grace a l'objet style.

let pageContent = document.getElementById('pageContent');
pageContent.styleBackgroundImage = 'url(/src/...)

console.log(pageContent);*/

/*let galImages = document.querySelectorAll('#singleGallery img');
for (image of galImages) {
    image.onclick = () => {
        alert('Bonjour !');
    }
}*/

//addEventListener
// il a besoin de 3 parametres.
//Le nom de l'événement a écouter . ici 'click'
// La fonction qui sera éxecuté quand cette événement aura lieu.
// 3 ieme parametre true ou false . ici toujours false

/*let galImages = document.querySelectorAll('#singleGallery img');

for (i = 0; i < galImages.length; i++) {
    let image = galImages[i];
    image.addEventListener('click', () => { alert('Bonjour') }, false);
    image.addEventListener('click', () => { alert('Au revoir') }, false);
}

console.log(galImages);*/


// récupération des images ainsi que leur nom et identifiant. creation automatique du rendu de la liste des images.

let galImages = document.querySelectorAll('#singleGallery img');

for (let i = 0; i < galImages.length; i++) {
    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);
}

window.addEventListener('load', () => {
    let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}';
    let galleries = JSON.parse(galleriesRaw);
    let searchParams = new URLSearchParams(window.location.search);

    if (searchParams.has('id')) {
        let galId = searchParams.get('id'); // get permet de récupérer la valeur du paramètre ID
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
        window.location.pathname = 'galleries.html'; // redirige l'utilisateur vers la page galleries
    } // la méthode has va permettre de vérifier si il existe un paramètre ID dans l'URL.
}, false);



function showSinglePict(e) {
    let image = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let bigImage = imageContainer.querySelector('img');
    bigImage.src = image.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false);
}

function closeSinglePict() {
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}



//submit et preventDefault()

let contactForm = document.querySelector('#frmContact');

contactForm.addEventListener('submit', () => {
    alert('merci');
}, false);

let contactForm = document.querySelector('#frmContact');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('merci');
}, false);


// setTimeout setInterval

let contactForm = document.querySelector('#frmContact');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('merci');
}, false);

setTimeout(() => {
    console.log('bonjour');
}, 5000);

let interval = setInterval(() => {
    console.log("interval d' une seconde");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5500);

// validation formulaire.
let contactForm = document.getElementById('frmContact'); // récupération de l'objet frmContact
let fields = document.querySelectorAll('input[required], textarea[required]');

fields.forEach((field) => {
    field.addEventListener('focus', () => { resetField(field) }, false);
    field.addEventListener('blur', () => { validateField(field) }, false);
});

contactForm.addEventListener('submit', (e) => { // addEventListener sur la variable contactForm
    e.preventDefault();

    // récupération des éléments à vérifier
    fields.forEach((field) => { resetField(field) });
    let valid = true; // affectation de la valeur true sur la variable valid .

    fields.forEach((field) => { // création d'une boucle sur la variable fields grace à la méthode forEach
        //console.log(field);
        if (!validateField(field)) { // dans la méthode validateField si l'évenement et true la fonction if ne
            // sera pas exécuté. si c'est false elle sera exécuté et l'utlisateur ne sera pas redirectionné.
            valid = false;
        }
    });

    if (valid) { // on vérifie si valide et toujours égale a true . si c'est le cas on peut soumettre le formulaire.
        e.target.submit();
    }

}, false);

function validateField(field) { // la méthode validateField permet dans le bloc de code d'utiliser un if
    if (field.checkValidity()) { // celui ci grace a la méthode checkValidity va permettre returné true ou false

        return true;
    } else {
        field.classList.add('invalid');
        field.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
};

// Générer des messages d'erreur

// Utilisant classList.add('invalid') sont comportement et etablis dans le css
// previousElementSibling permet de travailler sur l'éléments qui precede le field actuel . c'est a dire
// Tout les éléments qui précèdent nos input et le textarea. dans le dom c'est simplement ici les Labels
// La méthode insertAdjacentHTML(beforeend, `<span class="msg">${field.validateMessage}</span>`) je vais injecté de l'html au niveau de ce label
// l'argument beforeend me permet de dire ou je vais inséré le code. ici par exemple a la fin du label prenom . donc apres prenom
// Le second argument le span contient une class msg definit dans le css. et l'on va simplement interpoler le résultat si c'est faut que le navigateur retourne
//a l'aide de ${field.validationMessage}

// Permettre de supprimer les messages d'erreur quand ils ne sont pas necessaires.
// Il ne faut pas oublier de rajouter la fonction avant la validation de la variable valid = true;
function resetField(field) {
    let fieldLabel = field.previousElementSibling;
    field.classList.remove('invalid');
    while (fieldLabel.firstElementChild) { // firstElementChild permet de travailler uniquement sur le bloc de code .
        // il ne touche pas au text.
        fieldLabel.removeChild(fieldLabel.firstElementChild);
    } field.valid = true;


    function maFonction(g) {
        g / 2;
    }

    g = 12;
    maFonction(g);
    console.log(g);

    a = 0;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 2; j++) {
            a++;
        }
    }
    console.log(a)