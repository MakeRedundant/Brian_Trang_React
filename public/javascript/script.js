
// This code will make the zero-section go from opactiy 0 -1 
// Make the .zero-section element visible by default.
var zeroSection = document.querySelector('.zero-section');
zeroSection.style.opacity = 1;

// Get the navigation bar icons by their class.
var navIcons = document.querySelectorAll('nav i');

// Add a click event listener to each navigation bar icon.
navIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Set the opacity of the .zero-section element to 0 when an icon is clicked.
    zeroSection.style.opacity = 0;
  });
});

// Add a click event listener to your home icon.
var homeIcon = document.querySelector('.fa-home');
homeIcon.addEventListener('click', (event) => {
  // Set the opacity of the .zero-section element back to 1 when the home icon is clicked.
  zeroSection.style.opacity = 1;
});
