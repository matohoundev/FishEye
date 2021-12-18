// Api Data
import ApiServices from './getData/api.js';

// Photographer Page
import initProfil from './pages/photographers.js';

(function appDispatch() {
    new ApiServices().getPhotographers().then((data) => {
        initProfil(data.dataPhotographers);
    }).catch(() => {
        console.error('error Api');
    });
})();