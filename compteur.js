window.onload = (event) => {
    if (sessionStorage.getItem("conso") != null) {
        consoPerso = parseFloat(sessionStorage.getItem("conso"));
    };
    if (sessionStorage.getItem("ville") != null) {
        consoVilleurbanne = parseFloat(sessionStorage.getItem("ville"))
    };
    div.style.backgroundImage = `url(./images/img1.jpg)`;
    div2.style.backgroundImage = "url(./images/img6.jpg)";
    div3.style.backgroundImage = `url(./images/img16.jpg)`;
    div4.style.backgroundImage = `url(./images/img11.jpg)`;
    afficherConso(consoPerso);
    afficherConsoVilleurbanne(consoVilleurbanne);
    getConsoJour(today);
}

fetch("https://hubeau.eaufrance.fr/api/v1/niveaux_nappes/chroniques_tr?bss_id=BSS001TMCR&size=10&fields=date_mesure,profondeur_nappe&sort=desc")
    .then(res => res.json())
    .then(données => {
        console.log(données.data[0].profondeur_nappe);
        document.getElementById('nappe-villeurbanne').innerText = "profondeur actuelle de l'eau de la nappe de Villeurbanne : " + données.data[0].profondeur_nappe + " m"
    });

let today = new Date();
let consoPerso = 0;
let consoJour = 0;
let consoVilleurbanne = 0;
let compteur = setInterval(calculLitreParSecondeParPersonne, 1000);
let compteurVille = setInterval(calculLitreParSecondeVilleurbanne, 1000);

function afficherConso(valeurconso) {
    document.getElementById('conso-seconde').innerText = "Depuis que vous êtes connecté.e vous avez consommé " + (valeurconso.toFixed(2)) + " mL";
}

function afficherConsoVilleurbanne(valeurconso) {
    document.getElementById('conso-ville').innerText = "Depuis que vous êtes connecté.e Villeurbanne a consommé " + (valeurconso.toFixed(2)) + " L";
}

function calculLitreParSecondeParPersonne() {
    consoPerso += 1.73611;
    afficherConso(consoPerso);
    sessionStorage.setItem("conso", consoPerso);
    if (consoPerso == 1000) {
        alert("Déjà un litre!")
    }
}

function getConsoJour(date) {
    let hourNow = date.getHours();
    let minuteNow = date.getMinutes();
    let consoHeures = (hourNow * 3600) * 1.74;
    let consoMinutes = (minuteNow * 60) * 1.74;
    let consoJour = ((consoHeures + consoMinutes) / 1000).toFixed(2);
    document.getElementById('conso-jour').innerText += "Vous avez déjà consommé " + consoJour + " L d'eau potable en moyenne aujourd'hui!"
}

function calculLitreParSecondeVilleurbanne() {
    consoVilleurbanne += 268.716842;
    afficherConsoVilleurbanne(consoVilleurbanne);
    sessionStorage.setItem("ville", consoVilleurbanne);
}

let animation1 = anime({
    targets: '.drop-container1',
    translateY: 220,
    duration: 800,
    easing: 'linear',
    loop: true
})

let animation2 = anime({
    targets: '.drop-container2',
    translateY: 220,
    duration: 819,
    easing: 'linear',
    loop: true
})

let animation3 = anime({
    targets: '.drop-container3',
    translateY: 220,
    duration: 1488,
    easing: 'linear',
    loop: true
})

let animation4 = anime({
    targets: '.drop-container4',
    translateY: 220,
    duration: 1470,
    easing: 'linear',
    loop: true
})