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


// COUNTER
let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("review-count").textContent = `Total Reviews Submitted: ${reviewCount}`;

// BUTTONS
const buttonContainer = document.getElementById("button-container");

// BACK TO FORM BUTTON
const backButton = document.createElement("a");
backButton.href = "form.html";
backButton.textContent = "Back to Form";
backButton.classList.add("button");

// RESET BUTTON
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Count";
resetButton.classList.add("button");
resetButton.addEventListener("click", () => {
  localStorage.setItem("reviewCount", 0); 
  alert("Review count has been reset!");
  location.reload(); 
});


buttonContainer.appendChild(backButton);
buttonContainer.appendChild(resetButton);