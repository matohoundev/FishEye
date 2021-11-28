function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `src/assets/images/Photographers ID Photos/${portrait}`;

  function getUserCardDOM() {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.setAttribute('href', '/pages/photographer-page.html');
    a.setAttribute('class', 'card-photographer');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', `photo du photographe ${name}`);
    img.setAttribute('class', 'card-photographer__img');
console.log(img);
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
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(location);
    li.appendChild(bio);
    li.appendChild(cost);
    return li;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
