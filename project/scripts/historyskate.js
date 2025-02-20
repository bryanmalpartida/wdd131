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

// EVENTS
const events = [
    {
      id: "event-1",
      images: [
        {
          src: "/images/streetleague.webp",
          alt: "Angelo Caro competing in Street League",
        },
        {
          src: "/images/tokyo.webp",
          alt: "Angelo Caro performing a trick",
        },
      ],
    },
    {
      id: "event-2",
      images: [
        {
          src: "/images/DC.webp",
          alt: "US skateboarders visiting Perú",
        },
        {
          src: "images/shane.gif",
          alt: "Skateboarding session with US professionals",
        },
      ],
    },
  ];
  
  // USING FUNCTIONS TO INSERT IMAGES
  function insertEventImages() {
    events.forEach((event) => {
      const eventCard = document.getElementById(event.id);
  
      // CORRESPODING IMAGE
      event.images.forEach((image) => {
        // ELEMENT
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy"; 
        img.style.width = "50%";
        img.style.borderRadius = "8px";
        img.style.marginBottom = "1rem";
  
        // IMAGES ABOVE CARD
        eventCard.prepend(img);
      });
    });
  }
  
  // CALL FUNCTION
  insertEventImages();

