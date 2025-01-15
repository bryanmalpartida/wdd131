//LAST MODIFIED

// giving variable to last modified
const lastModifiedDate = document.lastModified;

// using another variable so we can call lastmodified by id
const lastModifiedParagraph = document.getElementById('lastModified');

// desired text+outcome
lastModifiedParagraph.textContent = `Last Modification: ${lastModifiedDate}`;

//YEAR 

//giving variable to year
const year = document.querySelector("#year");
//variable for current year 
const today = new Date();
//print
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//Name on header variable
const studentname = document.getElementById('WDD131BryanMalpartida');
//Name on header custom
studentname.innerHTML = 'WDD 131: Dynamic Web Fundamentals - <span class="WDD131BryanMalpartida">Bryan Malpartida</span>';