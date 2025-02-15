
//LAST MODIFIED FOOTER

// giving variable to last modified
const lastModifiedDate = document.lastModified;

// using another variable so we can call lastmodified by id
const lastModifiedParagraph = document.getElementById('lastModified');

// desired text+outcome
lastModifiedParagraph.textContent = `Last Modification: ${lastModifiedDate}`;

//YEAR  ON FOOTER

//giving variable to year
const year = document.querySelector("#year");
//variable for current year 
const today = new Date();
//print
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;




//HAMBURGUER BAR ON NAV BAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});



//TEMPLES
document.addEventListener('DOMContentLoaded', () => {
const temples = [
    {
      
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Trujillo Perú",
      location: "Trujillo, Perú",
      dedicated: "2015, June, 21",
      area: 28200,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3717-main.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 25-30",
      area: 72000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
      templeName: "Arequipa Perú",
      location: "Arequipa, Perú",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
    },
  ];



  //cards

const templeContainer = document.getElementById('temple-container');
const navLinks = document.querySelectorAll('.nav-link');

function createTempleCard(temple) {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = 'lazy';

    p1.textContent = temple.templeName;
    p1.classList.add('temple-name'); 
    p2.textContent = temple.location;
    p3.textContent = `Dedicated: ${temple.dedicated},`
    p4.textContent = `Area: ${temple.area} sq ft`;

    figcaption.appendChild(p1);
    figcaption.appendChild(p2);
    figcaption.appendChild(p3);
    figcaption.appendChild(p4);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = createTempleCard(temple);
        templeContainer.appendChild(card);
    });
}
//filtering
function filterTemples(filter) {
    switch (filter) {
        case 'old':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        case 'new':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        case 'large':
            return temples.filter(temple => temple.area > 90000);
        case 'small':
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');
        const filteredTemples = filterTemples(filter);
        displayTemples(filteredTemples);
    });
});

displayTemples(temples);
});