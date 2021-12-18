//Mettre le code JavaScript lié à la page photographer.html
import Profil from '../factories/profil.js';

function path() {
    // on check l'url pour trouver l'id
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}

function getProfil(id, data) {
    // on récupère le bon profil en fonction de l'id inscrit dans l'url
    const [ photographer ] = data.filter(profil => profil.id == id);

    return photographer;
}

async function displayData(profil) {
    // on créé un profil avec les data reçu
    const photographerModel = new Profil().profilHeader(profil);
    photographerModel.getProfil();
}

export default async function initProfil(data) {
    // Récupère les data d'un photographe
    const id = await path();
    const profil = await getProfil(id, data);
    displayData(profil);
}
