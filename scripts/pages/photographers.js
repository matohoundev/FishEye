import ApiServices from '../getData/api.js';

import profilFactory from '../factories/profil.js';
import Form from '../form/form.js';
import Likes from '../likes/likes.js';
import select from '../select/select.js';
import modalPictures from '../modalPictures/modalPictures.js';

function path() {
    // on check l'url pour trouver l'id
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}
// envoie toutes données pour les afficher
function displayProfil(profil) {
    const photographersSection = document.querySelector('.banner-profil');
    // on créé un profil avec les data reçu
    const photographerModel = profilFactory(profil);
    const userCardProfilDOM = photographerModel.getProfil();
    photographersSection.appendChild(userCardProfilDOM);
    new Form().init();
}
// on envoie les média en fonction du profil reçu
function displayMedia(photographerName, medias) {
    const listPhotographer = document.querySelector('.list-photography');
    const sort = document.querySelector('.Sort');

    sort.addEventListener('click', (e) => {
        new select().toggleDropDown();
        let sortChoice = new select().sortChoose(e);
        new ApiServices().getMediaSortByType(medias, sortChoice).then(mediaSorted => {
            listPhotographer.replaceChildren();
            mediaSorted.forEach((media) => {
                const photographerModel = profilFactory(media);
                const userCardMediaDOM = photographerModel.getMedia(photographerName);
                listPhotographer.appendChild(userCardMediaDOM).addEventListener('click', (e) => {
                    Likes(e);
                });   
            });
        });
    });

    medias.forEach((media) => {
        const photographerModel = profilFactory(media);
        const userCardMediaDOM = photographerModel.getMedia(photographerName);
        listPhotographer.appendChild(userCardMediaDOM).addEventListener('click', (e) => {
            Likes(e);
            new modalPictures().init(medias, media, photographerName, e);
        });   
    });
}
// on envoie les likes et le prix en fonction du profil reçu
function displayRank(profil,  likes) {
    const photographerModel = profilFactory(profil);
    photographerModel.getRank(likes);       
}

(function init() {
    const id = path();
    const photographer = new ApiServices().getPhotographerById(id);
    const mediaPhotographer = new ApiServices().getMediaById(id);
    const likes = new ApiServices().getLikesById(id);
    // const sort = new ApiServices().getMediaByIdAndSort(id);

    // on dispatch toutes les données
    Promise.all([photographer, mediaPhotographer, likes]).then(([photographer, media, likes]) => {
        displayProfil(photographer);
        displayMedia(photographer.name, media);
        displayRank(photographer, likes);
    }).catch(() => {
        console.log('error Api');
    });
})();