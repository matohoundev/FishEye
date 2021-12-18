export default class ApiServices {
    
    async getPhotographers() {
        let res = await fetch('../../data/photographers.json');
        let data = await res.json();
 
        const dataPhotographers = [...data.photographers];

        return { 'photographers' : dataPhotographers };
    }

    async getMedia() {
        let res = await fetch('../../data/photographers.json');
        let data = await res.json();

        const dataMedia = [...data.media];

        return { 'media' : dataMedia };
    }
}