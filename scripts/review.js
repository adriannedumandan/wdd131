
if (localStorage.getItem('reviewCount')) {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
} else {
    localStorage.setItem('reviewCount', 1);
}


const reviewCountDisplay = document.createElement('p');
reviewCountDisplay.textContent = `Number of reviews completed: ${localStorage.getItem('reviewCount')}`;
document.body.appendChild(reviewCountDisplay);

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = ` ${currentYear} 🏝️ Adrianne Dumandan 🏝️ Philippines`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;