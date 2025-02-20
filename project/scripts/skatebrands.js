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



// LIST 
const brands = [
    {
      name: "Cream Skateboards",
      description: "New generation peruvian brand. This brand is rather new is well known for their good quality skateboards. ",
      images: ["cream.webp"],
    },
    {
      name: "Dunkelvolk",
      description: "Specializes in apparel and accessories. One of the most succesful brands in Perú. You can find this brand in almost any mall.",
      images: ["dunkelvolk.webp"],
    },
    {
      name: "Epidemik",
      description: "Specializes in apparel and accessories. They are well known for hosting a lot of skateboarding events. A brand that is dedicated to skateboarding community and promoting the culture",
      images: ["epidemik.webp"],
    },
    {
      name: "Legaña Inc.",
      description: "One of the OG peruvian skateboarding brands. Used to sponsor international peruvian champion, Angelo Caro. Consistent brand and has been around for a while.",
      images: ["legana.webp"],
    },
    {
      name: "Fantasy",
      description: "Focuses on skateboards. It is a brand that is new as well. Started out small but has proven that they are a force to be reckon with. Elegant designs and you will see their boards in every skateshop.",
      images: ["fantasy.webp"],
    },
    {
      name: "GZuck",
      description: "Another succesful brand that has transitioned from only skateboards to shoes, apparel, skate gear, accesories. Main difference between GZuck and Dunkelvolk is that Gzuck still specializes in skateboarding and has not shifted to other type of sports",
      images: ["gzuck.webp"],
    },
    {
        name: "Ollie",
        description: "Focuses on affordable gear for beginners and pros alike. This is most peoples' first skateboard brand. Most of their sales are focused on little children who are not ready yet to have a professional skateboard. Although they do sell professional boards as well.",
        images: ["ollie.webp"],
      },
      {
        name: "Betta Footwear",
        description: "Focuses on footwear for skateboarders. Stylish designs and are true to their original first model which made them popular",
        images: ["betta.webp"],
      },
  ];
  
  // CARDS
  function createBrandCard(brand) {
    return `
      <div class="brand-card">
        <img src="images/${brand.images[0]}" alt="${brand.name}" loading="lazy">

        <h3>${brand.name}</h3>
        <p>${brand.description}</p>
      </div>
    `;
  }
  
  // CONTAINER
  const brandsContainer = document.getElementById("brands-container");
  brands.forEach((brand) => {
    brandsContainer.innerHTML += createBrandCard(brand);
  });

