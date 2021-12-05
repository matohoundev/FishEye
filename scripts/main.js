// Api Data
import Api from "./getData/api.js";

// Home page
import init from "./pages/index.js";

(function appDispatch() {
    new Api().getData().then((data) => {
        init(data.dataPhotographers);
    }).catch(() => {
        console.error("error Api");
    });
})();