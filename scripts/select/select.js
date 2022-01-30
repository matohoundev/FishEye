const sortSelect = document.querySelector('.sort-select');
const blocLinks = document.querySelector('.bloc-links');
// const liItems = document.querySelectorAll('.sort-select li');
const svg = document.querySelector('#Layer_1');

let toggleIndex;

export default class select {
    
    toggleDropDown() {
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

    sortChoose(e) {
        // console.log(liItems);
        // let sort = ['Popularité', 'Date', 'Titre'];
        if (e.target.innerHTML == 'Popularité' || e.target.innerHTML == 'Date' || e.target.innerHTML == 'Titre') {
            // console.log(e.target.innerHTML);
            // console.log('yes');
            return e.target.innerHTML;
        }
    }
    
    // liItems.forEach((li) => li.addEventListener('click', toggleDropDown));
}
