let lightboxModal = document.querySelector('.lightbox-modal');
let img = document.querySelector('.lightbox-modal-img');
let video = document.querySelector('.lightbox-modal-video');
let imgText = document.querySelector('.lightbox-modal-text');
let btnNext = document.querySelector('.fa-chevron-right');
let btnPrevious = document.querySelector('.fa-chevron-left');

export default class modalPictures {
    static currentMedia;
    init(medias, clickedMedia, namePhotographe, typeMedia) {
        this.currentMedia = clickedMedia;
        // launch modal event
       this.displayModal();  
        let btnClosePicture = document.querySelector('.btn-close-picture');
            
        btnClosePicture.addEventListener('click', this.closeModal);
        btnNext.addEventListener('click', () => this.nextAndPreviousPicture(medias, namePhotographe, 'next'))
        btnPrevious.addEventListener('click', () => this.nextAndPreviousPicture(medias, namePhotographe, 'previous'))
        this.onKeyboard(medias, namePhotographe)
            
        if (typeMedia === 'img') {
            this.displayImage(clickedMedia.title, clickedMedia.image, namePhotographe)
                
        } else {
            this.displayVideo(clickedMedia.title, clickedMedia.video, namePhotographe)
        }
        imgText.textContent = clickedMedia.title;
    }
    displayModal() {
        lightboxModal.style.display = 'flex';
    }
    
    closeModal() {
        lightboxModal.style.display = 'none';
        img.style.display = 'none';
        video.style.display = 'none';
    }  

    nextAndPreviousPicture(medias, photographerNameForDisplay, nextOrPrevious) {
        const currentMediaIndex = medias.findIndex(media => media.title === this.currentMedia.title)
        
        if (nextOrPrevious === 'previous') {   
            if (currentMediaIndex === 0) {
                this.currentMedia = medias[medias.length - 1]
            } else {
                this.currentMedia = medias[currentMediaIndex - 1]
            }
        } else {
            if (currentMediaIndex + 1 === medias.length) {
                this.currentMedia = medias[medias.length - medias.length]
            } else {
                this.currentMedia = medias[currentMediaIndex + 1]
            }
        }

        if (this.currentMedia.image) {
            this.displayImage(this.currentMedia.title, this.currentMedia.image, photographerNameForDisplay)
        } else {
            this.displayVideo(this.currentMedia.title, this.currentMedia.video, photographerNameForDisplay)
        }
    }  

    displayImage(lightboxTitle, lightboxImage, photographerName, ) {
        const imageName = `../assets/images/${this.justFirstname(photographerName)}/`;

        img.style.display = 'flex'
        video.style.display = 'none'
        img.setAttribute('src', imageName + lightboxImage);
        img.setAttribute('alt', `${lightboxTitle}`);
        imgText.textContent = lightboxTitle;
    }

    displayVideo(lightboxTitle, lightboxVideo, photographerName) {
        const videoName = `../assets/images/${this.justFirstname(photographerName)}/`;
        
        video.style.display = 'flex'
        img.style.display = 'none'
        video.setAttribute('src', videoName + lightboxVideo);
        video.setAttribute('alt', `${lightboxTitle}`);
        video.setAttribute('controls', 'controls');
        video.setAttribute('role', 'button');
        video.setAttribute('title', lightboxTitle);
        imgText.textContent = lightboxTitle;
    }

    justFirstname(name) {
        let firstname = name.split(' ')[0];
        firstname = firstname.replace('-',' ');    
        return firstname;
    }
    onKeyboard(medias, namePhotographe) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.nextAndPreviousPicture(medias, namePhotographe, 'next')
            } else if (e.key === 'ArrowLeft') {
                this.nextAndPreviousPicture(medias, namePhotographe, 'previous')
            } else if (e.key === 'Escape') {
                this.closeModal()
            }
        })
    }
}