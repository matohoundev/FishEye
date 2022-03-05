export default function Likes(e) {
    let isHeart = e.target.classList.contains('fa-heart');
    if (isHeart) {
        let isEmptyHeart = e.target.classList.contains('far');
        let allLikes = document.querySelector('#all-likes').innerHTML;
        // if heart is "void"
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