console.log("Script loaded successfully!");

const galleryImages = [
    "images/foto1.jpg",
    "images/foto2.jpg", 
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg",
    "images/foto7.jpg",
    "images/foto8.jpg",
    "images/foto9.jpg",
    "images/foto10.jpg",
    "images/foto11.jpg",
    "images/foto12.jpg",
    "images/foto13.jpg",
    "images/foto14.jpg",
    "images/foto15.jpg",
    "images/foto16.jpg",
    "images/foto17.jpg",
    "images/foto18.jpg",
    "images/foto19.jpg",
    "images/foto20.jpg",
    "images/foto21.jpg",
    "images/foto22.jpg",
    "images/foto23.jpg"
];

function initGallery() {
    console.log("Initializing gallery with", galleryImages.length, "images");
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item blood-card';
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Photo " + (index + 1);
        img.className = 'gallery-img';
        img.setAttribute('data-index', index);
        galleryItem.appendChild(img);
        galleryGrid.appendChild(galleryItem);
    });
    
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            openModal(parseInt(this.getAttribute('data-index')));
        });
    });
}

let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const currentImageSpan = document.getElementById('currentImage');
    const totalImagesSpan = document.getElementById('totalImages');
    
    modalImage.src = galleryImages[currentImageIndex];
    currentImageSpan.textContent = currentImageIndex + 1;
    totalImagesSpan.textContent = galleryImages.length;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    
    document.getElementById('modalImage').src = galleryImages[currentImageIndex];
    document.getElementById('currentImage').textContent = currentImageIndex + 1;
}

document.querySelector('.close-btn').addEventListener('click', closeModal);
document.querySelector('.prev-btn').addEventListener('click', function() { changeImage(-1); });
document.querySelector('.next-btn').addEventListener('click', function() { changeImage(1); });

document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});

document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});
