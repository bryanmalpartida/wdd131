//HAMBURGUER BAR ON NAV BAR

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});





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


// Skatepark Data
const skateparks = [
    {
      name: "Lloque Yupanqui",
      location: "Los Olivos, Lima",
      yearBuilt: 2015, 
      image: "lloqueyupanqui.webp",
    },
    {
      name: "Tumbes",
      location: "Tumbes",
      yearBuilt: 2019, 
      image: "tumbes.webp",
    },
    {
      name: "Manchay",
      location: "Pachacamac, Lima",
      yearBuilt: 2019, 
      image: "manchay.webp",
    },
    {
        name: "San Juan De Miraflores",
        location: "San Juan de Miraflores, Lima",
        yearBuilt: 2014, 
        image: "sjm.webp",
      },
      {
        name: "San Clemente Pisco",
        location: "San Clemente, Pisco",
        yearBuilt: 2024, 
        image: "sanclementepisco.webp",
      },
      {
        name: "Pueblo Libre",
        location: "Pueblo Libre, Lima",
        yearBuilt: 2014, 
        image: "pueblolibre.webp",
      },
  ];
  
  // SKATEPARK CARD FUNCTION
  function createSkateparkCard(skatepark) {
    return `
      <div class="skatepark-card">
        <img src="images/${skatepark.image}" alt="${skatepark.name}" loading="lazy">
        <h3>${skatepark.name}</h3>
        <p>Location: ${skatepark.location}</p>
        <p>Year Built: ${skatepark.yearBuilt}</p>
      </div>
    `;
  }
  
  // FUNCTION FILTER
  function filterSkateparks(skateparks, filterType) {
    const currentYear = new Date().getFullYear();
  
    switch (filterType) {
      case "old":
        return skateparks.filter((skatepark) => currentYear - skatepark.yearBuilt >= 5);
      case "new":
        return skateparks.filter((skatepark) => currentYear - skatepark.yearBuilt < 5);
      default:
        return skateparks; //SHOW ALL SKATEPARKS OPTION
    }
  }
  
  // FUNCTION TO DISPLAY SKATEPARKS
  function displaySkateparks(skateparks) {
    const skateparksContainer = document.getElementById("skateparks-container");
    skateparksContainer.innerHTML = ""; 
  
    skateparks.forEach((skatepark) => {
      skateparksContainer.innerHTML += createSkateparkCard(skatepark);
    });
  }
  
  // EVENT LISTENER FOR FILTERS
  document.getElementById("show-all").addEventListener("click", () => {
    displaySkateparks(skateparks); 
  });
  
  document.getElementById("show-old").addEventListener("click", () => {
    const oldSkateparks = filterSkateparks(skateparks, "old");
    displaySkateparks(oldSkateparks); 
  });
  
  document.getElementById("show-new").addEventListener("click", () => {
    const newSkateparks = filterSkateparks(skateparks, "new");
    displaySkateparks(newSkateparks); 
  });
  
  // INITIAL DISPLAY
  displaySkateparks(skateparks);

