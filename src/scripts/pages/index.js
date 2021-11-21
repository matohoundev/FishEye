async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = [
    {
      name: 'Ma data test',
      id: 1,
      city: 'Paris',
      country: 'France',
      tagline: 'Ceci est ma data test',
      price: 400,
      portrait: 'MimiKeel.jpg',
    },
    {
      name: 'Autre data test',
      id: 2,
      city: 'Londres',
      country: 'UK',
      tagline: 'Ceci est ma data test 2',
      price: 500,
      portrait: 'MimiKeel.jpg',
    },
  ];
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.all-photographers');

  photographers.forEach((photographer) => {
    // console.log(photographer);
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
  // console.log(photographers);
}

init();
