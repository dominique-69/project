 document.getElementById('learnMoreBtn').addEventListener('click', function() {
      var iconRow = document.getElementById('icon-row');
      iconRow.classList.remove('d-none');
      iconRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    document.getElementById('guideForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your free guide is being sent.');
});

const images = [
  { src: "img-room1.jpg", alt: "Living Room" },
  { src: "img-room2.jpg", alt: "Bedroom" },
  { src: "img-room3.jpg", alt: "Kitchen" },
];

let current = 0;
const carouselImg = document.getElementById('carouselImg');
const prevBtn = document.getElementById('prevImgBtn');
const nextBtn = document.getElementById('nextImgBtn');
const viewZoom = document.getElementById('viewZoom');
const zoomModal = document.getElementById('zoomModal');
const zoomImg = document.getElementById('zoomImg');
const dotsContainer = document.getElementById('carouselDots');

function updateCarousel() {
  carouselImg.src = images[current].src;
  carouselImg.alt = images[current].alt;
  // Update dots
  Array.from(dotsContainer.children).forEach((dot, idx) => {
    dot.classList.toggle('active', idx === current);
  });
}

dotsContainer.innerHTML = '';
images.forEach((img, idx) => {
  const dot = document.createElement('span');
  dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
  dot.onclick = () => { current = idx; updateCarousel(); };
  dotsContainer.appendChild(dot);
});

prevBtn.onclick = function() {
  current = (current - 1 + images.length) % images.length;
  updateCarousel();
};
nextBtn.onclick = function() {
  current = (current + 1) % images.length;
  updateCarousel();
};
viewZoom.onclick = function() {
  zoomImg.src = images[current].src;
  zoomImg.alt = images[current].alt;
  zoomModal.style.display = 'flex';
};
zoomModal.onclick = function() {
  zoomModal.style.display = 'none';
};

updateCarousel();

document.querySelectorAll('.info-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#f39c12';
  });
  item.addEventListener('mouseleave', () => {
    item.style.color = '#fff';
  });
});

function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('leadForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const entries = {};
    formData.forEach((value, key) => {
      entries[key] = value;
    });

    alert("✅ Thank you! Your guide will be sent to your email shortly.");

    form.reset();

  });
});