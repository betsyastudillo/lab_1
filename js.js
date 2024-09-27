const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemWidth = items[0].clientWidth;

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  // Check if reaching the last image
  if (currentIndex === items.length - 1) {
    currentIndex = 0; // Reset currentIndex to 0 for looping back
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  // Check if reaching the first image (after looping)
  if (currentIndex === 0) {
    currentIndex = items.length - 1; // Set currentIndex to last image index
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
});