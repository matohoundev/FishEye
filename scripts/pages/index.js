import ApiServices from '../getData/api.js';

import photographerFactory from '../factories/photographer.js';

function displayData(photographers) {
    const photographersSection = document.querySelector('.all-photographers');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

(function init() {
    // Récupère les datas des photographes
    new ApiServices().getPhotographers().then((data) => {
        displayData(data);
    }).catch(() => {
        console.log('error Api');
    });
})();
