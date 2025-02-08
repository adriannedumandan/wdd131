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
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah",
      dedicated: "1893, April, 6-24",
      area: 382207,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-763229.jpg"
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