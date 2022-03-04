// import Likes from '../likes/likes.js';
// import modalPictures from '../modalPictures/modalPictures.js';

import Likes from '../likes/likes.js';
import modalPictures from '../modalPictures/modalPictures.js';

export default function onMediaClicked(medias, media, photographerName, e) {
    let selected = e.target.classList.contains('card-photography__img');
    if (selected) {
        new modalPictures().init(medias, media, photographerName, e);
    } else {
        Likes(e);
    }
    e.preventDefault();
}