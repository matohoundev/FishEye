const blocLinks = document.querySelector('.bloc-links');
const btnDrop = document.querySelector('.btn-top');
const liItems = document.querySelectorAll('.dropdown li');
const svg = document.querySelector('#Layer_1');

let toggleIndex;

btnDrop.addEventListener('click', toggleDropDown);

function toggleDropDown() {
    if (!toggleIndex) {
        blocLinks.style.height = `${blocLinks.scrollHeight}px`;
        svg.style.transform = 'rotate(180deg)';
        toggleIndex = true;
        return;
    }

    svg.style.transform = 'rotate(0deg)';
    blocLinks.style.height = 0;
    toggleIndex = false;
}

liItems.forEach((li) => li.addEventListener('click', toggleDropDown));
