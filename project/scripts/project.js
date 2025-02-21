document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = ` ${currentYear} | Adrianne Dumandan | Philippines`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// JavaScript (project.js)
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// JavaScript for random tips
const tips = [
    "Stay organized and manage your time effectively.",
    "Communicate clearly and professionally with clients.",
    "Always be learning and improving your skills.",
    "Set realistic goals and track your progress."
];

function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

document.getElementById('tipButton').addEventListener('click', () => {
    const tip = getRandomTip();
    document.getElementById('tipDisplay').textContent = tip;
}); 