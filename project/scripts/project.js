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





// Example: Dynamic Content for Peruvian Skate Brands
const brands = [
    { name: "Brand A", products: ["Skateboards", "Clothing"], logo: "brand-a.jpg" },
    { name: "Brand B", products: ["Clothing"], logo: "brand-b.jpg" },
  ];
  
  const brandContainer = document.getElementById("brand-container");
  
  brands.forEach((brand) => {
    const card = `
      <div class="brand-card">
        <img src="images/${brand.logo}" alt="${brand.name}" loading="lazy">
        <h3>${brand.name}</h3>
        <p>Products: ${brand.products.join(", ")}</p>
      </div>
    `;
    brandContainer.innerHTML += card;
  });
  
  // Example: localStorage Visitor Counter
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visit-count").textContent = `You've visited this site ${visitCount} times.`;
  
  // Example: Conditional Branching
  const user = { name: "Skater", age: 20 };
  
  if (user.age >= 18) {
    console.log(`${user.name} is eligible for advanced skateboarding lessons.`);
  } else {
    console.log(`${user.name} is eligible for beginner lessons.`);
}





