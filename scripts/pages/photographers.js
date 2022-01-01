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
function displayMedia(photographerName, medias) {
    // on envoie les média en fonction du profil reçu
    medias.forEach((media) => {
        const photographerModel = new Profil().profilFactory(media);
        photographerModel.getMedia(photographerName);         
    });
}

(function init() {
    const id = path();
    new ApiServices().getPhotographerById(id).then((data) => {
        displayProfil(data);
    }).catch(() => {
        console.log('error Api photographersbyId');
    });

    const media = new ApiServices().getMediaById(id);
    const photographer = new ApiServices().getPhotographerById(id);

    Promise.all([photographer, media]).then(([photographer, media]) => {
        displayMedia(photographer.name, media);
    }).catch(() => {
        console.log('error Api photographersbyId and media');
    });

})();