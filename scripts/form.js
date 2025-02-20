
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = ` ${currentYear} 🏝️ Adrianne Dumandan 🏝️ Philippines`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;


const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const selectElement = document.getElementById('product-select');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Increment review counter
if (localStorage.getItem('reviewCount')) {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    reviewCount += 1;
    localStorage.setItem('reviewCount', reviewCount);
} else {
    localStorage.setItem('reviewCount', 1);
}

// // Display review count (optional)
// const reviewCountDisplay = document.createElement('p');
// reviewCountDisplay.textContent = `Number of reviews completed: ${localStorage.getItem('reviewCount')}`;
// document.body.appendChild(reviewCountDisplay);