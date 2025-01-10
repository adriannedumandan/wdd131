
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent = `© ${currentYear} Your Name`;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
