const images = document.getElementById('carousel').getElementsByTagName('img');
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');

let currentIndex = 0;


for (let i = 0; i < images.length; i++) {
  images[i].style.display = 'none';
}
images[currentIndex].style.display = 'block';


nextButton.addEventListener('click', () => {
  images[currentIndex].style.display = 'none';
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].style.display = 'block';
});


previousButton.addEventListener('click', () => {
  images[currentIndex].style.display = 'none';
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].style.display = 'block';
});