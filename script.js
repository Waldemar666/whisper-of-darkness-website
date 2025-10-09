// Массив с локальными фотографиями
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

// Инициализация галереи
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item blood-card';
        galleryItem.innerHTML = 
            <img src="${imageUrl}" alt="Whisper Of Darkness - Фото ${index + 1}" class="gallery-img" data-index="${index}">
        ;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Добавляем обработчики кликов
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', function() {
            openModal(parseInt(this.dataset.index));
        });
    });
}

// Модальное окно
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
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
    }
    
    const modalImage = document.getElementById('modalImage');
    const currentImageSpan = document.getElementById('currentImage');
    
    modalImage.src = galleryImages[currentImageIndex];
    currentImageSpan.textContent = currentImageIndex + 1;
}

// Обработчики событий для модального окна
document.querySelector('.close-btn').addEventListener('click', closeModal);
document.querySelector('.prev-btn').addEventListener('click', () => changeImage(-1));
document.querySelector('.next-btn').addEventListener('click', () => changeImage(1));

// Закрытие по клику вне изображения
document.getElementById('galleryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Навигация клавиатурой
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('galleryModal');
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});

// Плавная прокрутка для навигации
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
});
