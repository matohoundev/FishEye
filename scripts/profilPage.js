// Api Data
import ApiServices from './getData/api.js';

// Photographer Page
import profil from './pages/photographers.js';

(function appDispatch() {
    new ApiServices().getPhotographers().then((data) => {
        profil.initProfil(data.photographers);
    }).catch(() => {
        console.error('error Api photographe');
    });

    new ApiServices().getMedia().then((data) => {
        profil.initMedia(data.media);
    }).catch(() => {
        console.error('error Api media');
    });
})();