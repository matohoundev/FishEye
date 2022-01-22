/* eslint-disable linebreak-style */
export default function Likes(e) {
    let isHeart = e.target.classList.contains('fa-heart');
    // on récupère la première classe de l'icon heart donc far ou fas
    if (isHeart) {
        let isEmptyHeart = e.target.classList.contains('far');
        let allLikes = document.querySelector('#all-likes').innerHTML;
        // si le coeur est "vide"
        let likeValue = e.target.parentNode.firstElementChild;
        if (isEmptyHeart) {
            e.target.classList.replace('far', 'fas');
            likeValue.textContent = ++likeValue.textContent;
            document.querySelector('#all-likes').innerHTML = ++allLikes;
        } else {
            e.target.classList.replace('fas', 'far');
            likeValue.textContent = --likeValue.textContent;
            document.querySelector('#all-likes').innerHTML = --allLikes;
        }
    }
}