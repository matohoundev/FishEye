//Mettre le code JavaScript lié à la page photographer.html
import Profil from '../factories/profil.js';

function path() {
    // on check l'url pour trouver l'id
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}

// récupère toute les données du photographe
class photographer {
    getProfil(id, data) {
        // on récupère le bon profil en fonction de l'id inscrit dans l'url
        const [ photographer ] = data.filter(profil => profil.id == id);
    
        return photographer;
    }
    getMedia(id, data) {
        const media  = data.filter(profil => profil.photographerId == id);
        
        return media;
    }
}

// envoie toutes données pour les afficher
class displayServices {
    displayProfil(profil) {
        // on créé un profil avec les data reçu
        const photographerModel = new Profil().profilFactory(profil);
        photographerModel.getProfil();
    }
    displayMedia(medias) {
        // on envoie les média en fonction du profil reçu
        medias.forEach((media) => {
            console.log(media);
            const photographerModel = new Profil().profilFactory(media);
            photographerModel.getMedia();         
        });
    }
}

const initProfil = async (data) => {
    // Récupère les data d'un photographe
    const id = await path();
    const profil = await new photographer().getProfil(id, data);
    new displayServices().displayProfil(profil);
};

const initMedia = async (data) => {
    // Récupère les data d'un photographe
    const id = await path();
    const medias = await new photographer().getMedia(id, data);
    new displayServices().displayMedia(medias);
};

export default {initProfil, initMedia};