// Api Data
import ApiServices from './getData/api.js';

// Home page
import init from './pages/index.js';

(function appDispatch() {
    new ApiServices().getPhotographers().then((data) => {
        init(data.dataPhotographers);
    }).catch(() => {
        console.error('error Api');
    });
})();