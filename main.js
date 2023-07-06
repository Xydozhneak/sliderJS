const mainDiv = document.querySelector('#main');
const sliderDiv = document.createElement('div');
sliderDiv.id = 'slider';
mainDiv.appendChild(sliderDiv);

const currentImg = document.createElement("img");
sliderDiv.append(currentImg);

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png'];
let currentImageIndex = 0;

const nextButton = document.createElement("button");
nextButton.textContent = "➡️";
mainDiv.append(nextButton);
nextButton.addEventListener('click', showNextImg);

const prevButton = document.createElement("button");
prevButton.textContent = "⬅️";
mainDiv.prepend(prevButton);
prevButton.addEventListener('click', showPrevImg);

function showNextImg() {
  currentImageIndex++;
  currentImg.src = `img/${images[currentImageIndex ]}`;
  prevButton.classList.remove("hide");
  
  if (currentImageIndex === images.length - 1) {
    nextButton.classList.add("hide");
  }
}

function showPrevImg() {
  currentImageIndex--;
  currentImg.src = `img/${images[currentImageIndex]}`;

  nextButton.classList.remove("hide");

  if (currentImageIndex === 0) {
    prevButton.classList.add("hide");
  }
}

prevButton.classList.add("hide");

showNextImg();