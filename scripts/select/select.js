const sortSelect = document.querySelector('.sort-select');
const blocLinks = document.querySelector('.bloc-links');
const btnDrop = document.querySelector('.btn-top');
const liItems = document.querySelectorAll('.dropdown li');
const svg = document.querySelector('#Layer_1');

let toggleIndex;

btnDrop.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    if (!toggleIndex) {
        sortSelect.style.height = `${sortSelect.scrollHeight}px`;
        blocLinks.style.opacity = 1;
        svg.style.transform = 'rotate(180deg)';
        toggleIndex = true;
        return;
    }

    sortSelect.style.height = '100%';
    blocLinks.style.opacity = 0;
    svg.style.transform = 'rotate(0deg)';
    toggleIndex = false;
}

liItems.forEach((li) => li.addEventListener('click', toggleDropDown));
