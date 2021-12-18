import photographerFactory from '../factories/photographer.js';

function getPhotographers(data) {
    const photographers = data;
    
    return {
        photographers: [...photographers],
    };
}

async function displayData(photographers) {
    const photographersSection = document.querySelector('.all-photographers');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

export default async function init(data) {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers(data);
    displayData(photographers);
}
