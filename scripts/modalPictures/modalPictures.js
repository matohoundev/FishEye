let lightboxModal = document.querySelector('.lightbox-modal');
let img = document.querySelector('.lightbox-modal-img');
let video = document.querySelector('.lightbox-modal-video');
let imgText = document.querySelector('.lightbox-modal-text');
let btnNext = document.querySelector('.btn-next-picture');
let btnPrevious = document.querySelector('.btn-previous-picture');

export default class modalPictures {
    init(medias, clickedMedia, namePhotographe, e) {
        let isImg = e.target.classList.contains('card-photography__img');
        let isVideo = e.target.classList.contains('card-photography__video');

        const picture = `../assets/images/${this.justFirstname(namePhotographe)}/`;

        // launch modal event
        e.target.addEventListener('click', this.displayModal);

        if (isImg || isVideo) {      
            let btnClosePicture = document.querySelector('.btn-close-picture');
            
            btnClosePicture.addEventListener('click', this.closeModal);
            // incompréhensible
            btnNext.addEventListener('click', this.nextPicture(medias, clickedMedia, namePhotographe))
            btnPrevious.addEventListener('click', this.previousPicture(medias, clickedMedia, namePhotographe))
            
            if (isImg) {
                img.style.display = 'flex';
                img.setAttribute('src', picture + clickedMedia.image);
                img.setAttribute('alt', `${clickedMedia.title}`);
            } else {
                video.style.display = 'flex';
                video.setAttribute('src', picture + clickedMedia.image);
                video.setAttribute('alt', `${clickedMedia.title}`);
            }
            imgText.textContent = clickedMedia.title;
        }

    }
    displayModal() {
        lightboxModal.style.display = 'flex';
    }
    
    closeModal() {
        lightboxModal.style.display = 'none';
        img.style.display = 'none';
        video.style.display = 'none';
    }  
    
    previousPicture(medias,  clickedMedia, photographerNameForDisplay) {
        const currentMediaIndex = medias.findIndex(media => media.title === clickedMedia.title)
        let mediaToDisplay;

        if (currentMediaIndex === 0) {
            mediaToDisplay = medias[medias.length - 1]
        } else {
            mediaToDisplay = medias[currentMediaIndex - 1]
        }
        this.displayImage(mediaToDisplay.title, mediaToDisplay.image, photographerNameForDisplay)
    }  

    nextPicture(medias,  clickedMedia, photographerNameForDisplay) {
        console.log('test');
        const currentMediaIndex = medias.findIndex(media => media.title === clickedMedia.title)
        let mediaToDisplay;

        if (currentMediaIndex === 0) {
            mediaToDisplay = medias[medias.length + 1]
        } else {
            mediaToDisplay = medias[currentMediaIndex + 1]
        }
        this.displayImage(mediaToDisplay.title, mediaToDisplay.image, photographerNameForDisplay)
    }  

    displayImage(lightboxTitle, lightboxImage, photographerName, ) {
        const picture = `../assets/images/${this.justFirstname(photographerName)}/`;

        img.setAttribute('src', picture + lightboxImage);
        img.setAttribute('alt', `${lightboxTitle}`);
        imgText.textContent = lightboxTitle;
    }

    displayVideo(lightboxTitle, lightboxVideo, photographerName) {
        const picture = `../assets/images/${this.justFirstname(photographerName)}/`;
        
        video.setAttribute('src', picture + lightboxVideo);
        video.setAttribute('alt', `${lightboxTitle}`);
        imgText.textContent = lightboxTitle;
    }

    justFirstname(name) {
        let firstname = name.split(' ')[0];
        firstname = firstname.replace('-',' ');    
        return firstname;
    }
}