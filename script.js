document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('active');
});


// Show More Button
document.querySelector('.more-btn').addEventListener('click', function () {
  // Select all hidden speaker elements
  const hiddenSpeakers = document.querySelectorAll('.hidden-speaker');
  
  hiddenSpeakers.forEach(speaker => {
    speaker.style.display = 'block'; // Show the hidden speakers
  });
  
  // Hide the "Show More" button and show the "Show Less" button
  this.style.display = 'none';
  document.querySelector('.less-btn').style.display = 'inline-block';
});

const moreBtn = document.querySelector('.more-btn');
const lessBtn = document.querySelector('.less-btn');
const hiddenSpeakers = document.querySelectorAll('.hidden-speaker');

moreBtn.addEventListener('click', () => {
  hiddenSpeakers.forEach(speaker => speaker.style.display = 'block');
  moreBtn.style.display = 'none';
  lessBtn.style.display = 'inline-block';
});

lessBtn.addEventListener('click', () => {
  hiddenSpeakers.forEach(speaker => speaker.style.display = 'none');
  moreBtn.style.display = 'inline-block';
  lessBtn.style.display = 'none';
});

document.getElementById('year').textContent = new Date().getFullYear();
    

function toggleMenu() {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const isHidden = dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '';

  if (isHidden) {
      dropdownMenu.style.display = 'block'; // Show the dropdown
  } else {
      dropdownMenu.style.display = 'none'; // Hide the dropdown
  }
}
