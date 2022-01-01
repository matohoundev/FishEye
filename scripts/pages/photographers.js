import ApiServices from '../getData/api.js';

import Profil from '../factories/profil.js';

function path() {
    // on check l'url pour trouver l'id
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}

// envoie toutes données pour les afficher
function displayProfil(profil) {
    // on créé un profil avec les data reçu
    const photographerModel = new Profil().profilFactory(profil);
    photographerModel.getProfil();
}
// on envoie les média en fonction du profil reçu
function displayMedia(photographerName, medias) {
    medias.forEach((media) => {
        const photographerModel = new Profil().profilFactory(media);
        photographerModel.getMedia(photographerName);         
    });
}
// on envoie les likes et le prix en fonction du profil reçu
function displayRank(profil,  likes) {
    const photographerModel = new Profil().profilFactory(profil);
    photographerModel.getRank(likes);       
}

(function init() {
    const id = path();
    const photographer = new ApiServices().getPhotographerById(id);
    const mediaPhotographer = new ApiServices().getMediaById(id);
    const likes = new ApiServices().getLikesById(id);

    Promise.all([photographer, mediaPhotographer, likes]).then(([photographer, media, likes]) => {
        displayProfil(photographer);
        displayMedia(photographer.name, media);
        displayRank(photographer, likes);
    }).catch(() => {
        console.log('error Api photographersbyId and media');
    });
})();