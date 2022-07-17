const images = ["img.webp","img8.webp"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");


bgImage.src = `..img/${chosenImage}`;

bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(${bgImage.src})`; 
