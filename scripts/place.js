
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = ` ${currentYear} 🏝️ Adrianne Dumandan 🏝️ Philippines`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}


const temperature = 25; 
const windSpeed = 3; 


if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('.weather .value:last-child').textContent = `${windChill} °C`;
} else {
    document.querySelector('.weather .value:last-child').textContent = 'N/A';
}
