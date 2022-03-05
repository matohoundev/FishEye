export default function profilFactory(data) {
    const { id, name, portrait, city, country, tagline, price, title, image, likes, date, video } = data;

    const picture = `../assets/images/Photographers ID Photos/${portrait}`;

    function getProfil() {
        const BannerProfil = document.createElement('div');
        BannerProfil.setAttribute('class', 'banner-photographer');

        const divBannerInfo = document.createElement('div');
        divBannerInfo.setAttribute('class', 'banner-photographer__info');

        const divContainInfo = document.createElement('div');
        divContainInfo.setAttribute('class', 'contain__info');

        const btnContact = document.createElement('button');
        btnContact.setAttribute('id', 'btn-contact');
        btnContact.setAttribute('class', 'btn_focus');
        btnContact.setAttribute('title', 'Contact Me');
        btnContact.textContent = 'Contactez-moi';

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'card-photographer__name');
        h1.textContent = name;

        const formName = document.querySelector('#form-title');
        formName.textContent = `Contactez-moi ${name}`;

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

        BannerProfil.appendChild(divBannerInfo);
        BannerProfil.appendChild(img);
        divBannerInfo.appendChild(divContainInfo);
        divBannerInfo.appendChild(btnContact);
        divBannerInfo.after(img);
        divContainInfo.appendChild(h1);
        divContainInfo.appendChild(location);
        divContainInfo.appendChild(bio);
        return BannerProfil;
    }

    function getMedia(name) {
        let firstname = name.split(' ')[0];
        firstname = firstname.replace('-',' ');     
        const li = document.createElement('li');

        const article = document.createElement('article');
        article.setAttribute('class', 'card-photography');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.setAttribute('title', 'lightbox-picture-open');

        if (image) {
            const photography = `../assets/images/${firstname}/${image}`;    
            const img = document.createElement('img');
            img.setAttribute('src', photography);
            img.setAttribute('alt', title);
            img.setAttribute('class', 'card-photography__img');
            a.appendChild(img);   
        } else {
            const audiovisual = `../assets/images/${firstname}/${video}`;
            const visual = document.createElement('video');
            visual.setAttribute('controls', 'controls');
            visual.setAttribute('src', audiovisual);
            visual.setAttribute('alt', title);
            visual.setAttribute('role', 'button');
            visual.setAttribute('class', 'card-photography__video');
            visual.setAttribute('title', title);
            a.appendChild(visual);
        }

        const div = document.createElement('div');

        const pTitle = document.createElement('p');
        pTitle.textContent = title;

        const divLike = document.createElement('div');
        divLike.setAttribute('class', 'content-like');

        const pLike = document.createElement('p');
        pLike.textContent = likes;

        const heart = document.createElement('i');
        heart.setAttribute('class', 'far fa-heart');
        heart.setAttribute('data-value', likes);
        heart.setAttribute('alt', 'likes');

        li.appendChild(article);
        article.appendChild(a);
        a.appendChild(div);
        div.appendChild(pTitle);
        div.appendChild(divLike);
        divLike.appendChild(pLike);
        divLike.appendChild(heart);
        return li;
    }
    function getPricesAndLikes(likes) {
        const rank = document.querySelector('.rank');

        const div = document.createElement('div');

        const pLikes = document.createElement('p');
        pLikes.setAttribute('id', 'all-likes');
        pLikes.textContent = likes;
            
        const heart = document.createElement('i');
        heart.setAttribute('class', 'fas fa-heart');

        const pPrice = document.createElement('p');
        pPrice.textContent = `${price} / jour €`;

        rank.appendChild(div);
        div.appendChild(pLikes);
        div.appendChild(heart);
        rank.appendChild(pPrice);
        return rank;
    }
    return { id, name, portrait, city, country, tagline, price, title, image, likes, date, video, getProfil, getMedia, getPricesAndLikes };
}