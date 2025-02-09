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




//WINDCHILL START


function calculateWindChill(temperature, windSpeed, unit = 'C') {
   
    if (
        (unit === 'C' && temperature <= 10 && windSpeed > 4.8) ||
        (unit === 'F' && temperature <= 50 && windSpeed > 3)
    ) {
        
        if (unit === 'C') {
           
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) + ' °C';
        } else {
            
            return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2) + ' °F';
        }
    } else {
       
        return 'N/A';
    }
}


const temperature = 18; 
const windSpeed = 10; 

const windChill = calculateWindChill(temperature, windSpeed, 'C');

document.addEventListener('DOMContentLoaded', () => {
    const windChillElement = document.getElementById('windChill');
    if (windChillElement) {
        windChillElement.textContent = windChill; 
    }
});

//WINDCHILL END