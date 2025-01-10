
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `© ${currentYear} Your Name`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
