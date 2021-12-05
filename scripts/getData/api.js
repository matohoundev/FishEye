export default class Api {
    async getData() {
        let res = await fetch("data/photographers.json");
        let data = await res.json();
 
        const dataPhotographers = [...data.photographers];
        const dataMedia = [...data.media];

        return { dataPhotographers, dataMedia };
    }
}