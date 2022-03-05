import ApiServices from '../ApiServices/apiServices.js';

import photographerFactory from '../factories/home.js';

function displayData(photographers) {
    const photographersSection = document.querySelector('.all-photographers');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

(function init() {
    // Retrieves data from photographers
    new ApiServices().getPhotographers().then((data) => {
        displayData(data);
    }).catch(() => {
        console.log('error Api');
    });
})();
