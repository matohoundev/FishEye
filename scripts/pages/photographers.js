//Mettre le code JavaScript lié à la page photographer.html
// import Profil from "../factories/profil.js";

function path() {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    const id = urlParams.get('id');
    return id;
}

function getProfil(id, data) {
    const photographer = data.filter(profil => profil.id == id);

    console.log(photographer);
    return photographer;
}

// async function displayData(photographers) {
//     const photographersSection = document.querySelector(".banner-photographer");
//     // const id = window.location.search.split("id=")[1];

//     // const profil = !id ? photographers : photographers.filter(photographer => photographer.id == id);

//     const photographerModel = new Profil().profilHeader(profil);
//     const userCardDOM = photographerModel.getProfil();
//     photographersSection.appendChild(userCardDOM);
// }

export default async function initProfil(data) {
    // Récupère les datas des photographes
    const id = await path();
    getProfil(id, data);
    // const { photographers } = await getProfil(data);
    // displayData(photographers);
}
