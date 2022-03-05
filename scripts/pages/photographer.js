import ApiServices from '../ApiServices/apiServices.js';

import profilFactory from '../factories/profil.js';
import Form from '../form/form.js';
import select from '../select/select.js';
import onMediaClicked from '../onMediaClicked/onMediaClicked.js';

function path() {
    // check url for id
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}
// send all data for display
function displayProfil(profil) {
    const photographersSection = document.querySelector('.banner-profil');
    const photographerModel = profilFactory(profil);
    const userCardProfilDOM = photographerModel.getProfil();
    photographersSection.appendChild(userCardProfilDOM);
    new Form().init();
}
//  send media for display
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
                    onMediaClicked(mediaSorted, media, photographerName, e);
                });  
            });
        });
    });

    medias.forEach((media) => {
        const photographerModel = profilFactory(media);
        const userCardMediaDOM = photographerModel.getMedia(photographerName);
        listPhotographer.appendChild(userCardMediaDOM).addEventListener('click', (e) => {
            onMediaClicked(medias, media, photographerName, e);
        });  
    });
}
// send prices and likes
function displayPricesAndLikes(profil,  likes) {
    const photographerModel = profilFactory(profil);
    photographerModel.getPricesAndLikes(likes);       
}

(function init() {
    const id = path();
    const photographer = new ApiServices().getPhotographerById(id);
    const mediaPhotographer = new ApiServices().getMediaById(id);
    const likes = new ApiServices().getLikesById(id);

    // dispatch all data
    Promise.all([photographer, mediaPhotographer, likes]).then(([photographer, media, likes]) => {
        displayProfil(photographer);
        displayMedia(photographer.name, media);
        displayPricesAndLikes(photographer, likes);
    }).catch(() => {
        console.log('error Api');
    });
})();