// Массив с прямыми ссылками на фотографии
const galleryImages = [
    "https://i.ibb.co/qL02GpL6/photo1.jpg",
    "https://i.ibb.co/993kkChG/photo2.jpg", 
    "https://i.ibb.co/3mfmdQXw/photo3.jpg",
    "https://i.ibb.co/zhJsG6DC/photo4.jpg",
    "https://i.ibb.co/4nb4JF7H/photo5.jpg",
    "https://i.ibb.co/nsvH8r3z/photo6.jpg",
    "https://i.ibb.co/7xGQP8pP/photo7.jpg",
    "https://i.ibb.co/rR2cphwf/photo8.jpg",
    "https://i.ibb.co/6J4fg42G/photo9.jpg",
    "https://i.ibb.co/yBdjvwfp/photo10.jpg",
    "https://i.ibb.co/GfSLGkms/photo11.jpg",
    "https://i.ibb.co/3966TkwW/photo12.jpg",
    "https://i.ibb.co/XxckXBHk/photo13.jpg",
    "https://i.ibb.co/RppvmppL/photo14.jpg",
    "https://i.ibb.co/XfPZmH9M/photo15.jpg",
    "https://i.ibb.co/hFGFGHSk/photo16.jpg",
    "https://i.ibb.co/FkHZLrVM/photo17.jpg",
    "https://i.ibb.co/k2DNwT72/photo18.jpg",
    "https://i.ibb.co/vvk4G8MQ/photo19.jpg",
    "https://i.ibb.co/fdBxdcrb/photo20.jpg",
    "https://i.ibb.co/CpGnrZT8/photo21.jpg",
    "https://i.ibb.co/5gL0g8S6/photo22.jpg",
    "https://i.ibb.co/21bYP1Yf/photo23.jpg"
];

// Инициализация галереи
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item blood-card';
        galleryItem.innerHTML = `
            <img src="${imageUrl}" alt="Whisper Of Darkness - Фото ${index + 1}" class="gallery-img" data-index="${index}">
        `;
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

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    
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

    // Параллакс эффект
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Навигация при скролле
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.padding = '1rem 0';
        }
    });

    // Анимация появления элементов
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.blood-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
