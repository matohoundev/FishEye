export default function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/images/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const li = document.createElement('li');

        const a = document.createElement('a');
        a.setAttribute('href', `pages/photographer-page.html?id=${id}`);
        a.setAttribute('class', 'card-photographer');

        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', `photo du photographe ${name}`);
        img.setAttribute('class', 'card-photographer__img');

        const h2 = document.createElement('h2');
        h2.setAttribute('class', 'card-photographer__name');
        h2.textContent = name;

        const location = document.createElement('p');
        location.setAttribute('class', 'card-photographer__location');
        location.textContent = `${city},${country}`;

        const bio = document.createElement('p');
        bio.setAttribute('class', 'card-photographer__bio');
        bio.textContent = tagline;

        const cost = document.createElement('p');
        cost.setAttribute('class', 'card-photographer__price');
        cost.textContent = `${price}€`;

        li.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        a.appendChild(location);
        a.appendChild(bio);
        a.appendChild(cost);
        return li;
    }
    return { getUserCardDOM };
}
