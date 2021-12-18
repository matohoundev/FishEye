export default class Profil {
    profilHeader(data) {
        const { id, name, portrait, city, country, tagline } = data;

        const picture = `../assets/images/Photographers ID Photos/${portrait}`;

        function getProfil() {
            const photographersSection = document.querySelector('.banner-photographer');

            const divBannerInfo = document.createElement('div');
            divBannerInfo.setAttribute('class', 'banner-photographer__info');

            const divContainInfo = document.createElement('div');
            divContainInfo.setAttribute('class', 'contain__info');

            const h1 = document.createElement('h1');
            h1.setAttribute('class', 'card-photographer__name');
            h1.textContent = name;

            const location = document.createElement('p');
            location.setAttribute('class', 'card-photographer__location');
            location.textContent = `${city}, ${country}`;

            const bio = document.createElement('p');
            bio.setAttribute('class', 'card-photographer__bio');
            bio.textContent = tagline;

            const img = document.createElement('img');
            img.setAttribute('src', picture);
            img.setAttribute('alt', `photo du photographe ${name}`);
            img.setAttribute('class', 'banner-photographer__img');

            photographersSection.appendChild(divBannerInfo);
            photographersSection.appendChild(img);
            divBannerInfo.appendChild(divContainInfo);
            divBannerInfo.after(img);
            divContainInfo.appendChild(h1);
            divContainInfo.appendChild(location);
            divContainInfo.appendChild(bio);
            return photographersSection;
        }
        return { id, name, picture, city, country, tagline, getProfil };
    }
}