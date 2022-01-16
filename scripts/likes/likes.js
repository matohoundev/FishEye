/* eslint-disable linebreak-style */
export default function Likes(e) {
    let likeValue = e.target.parentNode.firstElementChild;
    let heart = e.target.parentNode.lastElementChild.classList.value.indexOf('fa-heart');
    // on récupère la première classe de l'icon heart donc far ou fas
    let heartMode = e.target.parentNode.lastElementChild.classList.value.split(' ')[0];
    let allLikes = document.querySelector('#all-likes').innerHTML;
    if (heart != -1) {
        // si le coeur est "vide"
        if (heartMode === 'far') {
            e.target.classList.replace('far', 'fas');
            likeValue.textContent = ++likeValue.textContent;
            document.querySelector('#all-likes').innerHTML = ++allLikes;
        } else if (heartMode === 'fas') {
            e.target.classList.replace('fas', 'far');
            likeValue.textContent = --likeValue.textContent;
            document.querySelector('#all-likes').innerHTML = --allLikes;
        }
    }
}