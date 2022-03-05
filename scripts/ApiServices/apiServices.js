export default class ApiServices {

    URL = '../../data/photographers.json';

    async getPhotographersAndMedias() {
        let res = await fetch(this.URL);
        let data = await res.json();

        const dataAll = data;

        return { 'dataAll' : dataAll };
    }
    
    async getPhotographers() {
        let res = await fetch(this.URL);
        let data = await res.json();
 
        const dataPhotographers = [...data.photographers];

        return dataPhotographers;
    }

    async getMedias() {
        let res = await fetch(this.URL);
        let data = await res.json();

        const dataMedias = [...data.media];

        return { 'medias' : dataMedias };
    }

    async getPhotographerById(id) {
        let res = await fetch(this.URL);
        let data = await res.json();
 
        const [photographer] = [...data.photographers.filter(photographer => photographer.id == id)];

        return photographer;
    }
    
    async getMediaById(id) {
        let res = await fetch(this.URL);
        let data = await res.json();

        const dataMedia = [...data.media.filter(profil => profil.photographerId == id)];

        return dataMedia;
    }

    async getMediaSortByType(medias, typeSort) {
        const dataSortByPopularity = [...medias].sort((media1, media2) => media2.likes - media1.likes);
        const dataSortByDate = [...medias].sort((media1, media2) => new Date(media2.date).valueOf() - new Date(media1.date).valueOf());
        const dataSortByTitle = [...medias].sort((media1, media2) => { 
            if (media1.title.toLowerCase() < media2.title.toLowerCase()) {
                return -1;
            } else if (media1.title.toLowerCase() > media2.title.toLowerCase()) {
                return 1;
            }
        });
        switch (typeSort) {
        case 'sort-popularity':
            return dataSortByPopularity;
        case 'sort-date':
            return dataSortByDate;
        case 'sort-title':
            return dataSortByTitle;
        default:
            return dataSortByPopularity;
        }
    }

    async getLikesById(id) {
        let res = await fetch(this.URL);
        let data = await res.json();
        let likes = 0;

        const dataMedia = [...data.media.filter(profil => profil.photographerId == id)];

        dataMedia.forEach((media) => {
            likes = likes + media.likes;
        });

        return likes;
    }
}