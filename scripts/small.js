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
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
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