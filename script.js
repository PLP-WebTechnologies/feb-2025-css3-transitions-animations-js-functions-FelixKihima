

let isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';


const toggleButton = document.getElementById('toggleAnimationButton');
const image = document.getElementById('animatedImage');


if (isAnimationEnabled) {
  image.classList.add('animate');
} else {
  image.classList.remove('animate');
}


toggleButton.addEventListener('click', function() {
  // Toggle the animation
  if (image.classList.contains('animate')) {
    image.classList.remove('animate');
    localStorage.setItem('animationEnabled', 'false'); // Store preference
  } else {
    image.classList.add('animate');
    localStorage.setItem('animationEnabled', 'true'); // Store preference
  }
});