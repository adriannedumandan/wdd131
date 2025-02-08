const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = ` ${currentYear} | Adrianne Dumandan | Philippines`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	templeName: "Salt Lake",
	location: "Salt Lake City, Utah",
	dedicated: "1893, April, 6-24",
	area: 382207,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-763229.jpg"
	},
	{
	templeName: "Bountiful Utah",
	location: "Bountiful, Utah",
	dedicated: "1995, January, 8-14",
	area: 104000,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
	}
];

  function displayTemples(templeList) {
	  const container = document.getElementById('temple-container');
	  container.innerHTML = ''; 
  
	  templeList.forEach(temple => {
		  const templeCard = document.createElement('div');
		  templeCard.classList.add('temple-card');
  
		  templeCard.innerHTML = `
			  <h2>${temple.templeName}</h2>
			  <p><strong>Location:</strong> ${temple.location}</p>
			  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
			  <p><strong>Size:</strong> ${temple.area} sq ft</p>
			  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
		  `;
  
		  container.appendChild(templeCard);
	  });
  }
  
  displayTemples(temples);