// Массив с ссылками на фотографии
const galleryImages = [
    "https://i.ibb.co/HLN9vqLZ/i1smlv-Muchc.webp",
    "https://i.ibb.co/1fJttwMb/1758893790849.jpg",
    "https://i.ibb.co/zV8VxDc1/2p-Xgh-Pt-SLg4.jpg",
    "https://i.ibb.co/C52BhPD4/XHl2kq4-Kc-PMTme-S60p7-YB-GFHp-Ii3ikr57800m-Si-Va7-TNPR5-Am-Pw-PC91-ZUFQqxh-TEGNe-Qs-BQG-s0-Ge-TIs-R.jpg",
    "https://i.ibb.co/zT3PNmrz/Imac-Zs-HD0-D1-DLy5-Wyasve0jy-N3d-Vrx-Bw7-EP8-Bcx-La-NDuq-T5-JVx5c-Ci-L7r-RDOd9u-TUOgjz-TZW0u-H2-UU8.jpg",
    "https://i.ibb.co/PZn7zxTw/Vbol-Zi-YMPQv-EH3dn-XEn-Q-S95-NUkd94-UF1z7n0-QWp-NS3-I7-Su5ukt-T6-Oup9m-LWV-xk9j-Za-AF-m5-O-8-LIp-G.jpg",
    "https://i.ibb.co/wZK7V3QV/h-Du-OXc-HZFOYo3-R7-PYxc44-N4-EDi6-W2q8b-us-VGO7-IEuov-MVh-To625-Wdp-Jg-SMQW4-G0h-ZZyfw-CL61-Ttl-Kw.jpg",
    "https://i.ibb.co/wFhwQqzr/r-Vz6-HTReis6-LXX6o-K9g-OSBww-H81oss-Dr-DD-y-Bw4q-O9qd-Pwcf-OQeq-Dx1kq-N41iuu-RMs-Bw-S692f-YBJFfvu-R.jpg",
    "https://i.ibb.co/Kz93F9YB/ez-XIxzcjx-TJz-MAE5c-Eve-F9zet-Z0-D4h-AO0-FC2b-B14qrb-Tjg-Ovz-Nu-gui2-Mr-ZRQd-B-9ys0rf0-L9y-Uut-D7sg.jpg",
    "https://i.ibb.co/0Vmb4gDK/D284h-IYx-HIbd-Mor-CQr-OG4g-Oamw-BKeom-JIGEfb7-Bff-IQr-F0-K8-Lc-Zr4u-Ejm-FDONn-Yt441kg8v-Lw-Eu-XLO8m.jpg",
    "https://i.ibb.co/0pbS1Z5B/Wr3-Nv-AZw-i5-XUQKNOqv-Ux7x-SJ0s-Q-k-Sf-Bt-KMxhh-P3-Mi-Gz-HOl-EJVCDyb73k6t-Zb-Iw-Gca-PGt-Du-LVGHJq7.jpg",
    "https://i.ibb.co/C3CCwWqv/x6z-Kfc-riwod6-CT8-Yjz-GVK2-IH79-QFQI2-TAL9-Xqf0-XVe-Krs1-BTm-Xdc3ym-Ze-Ap-C-sx-LRVQn-Lnj8r3g13-BCl3.jpg",
    "https://i.ibb.co/YBHT29gT/S6-Kb-Q9-KArd-FZk4ueu9j-WPKa-YB1yyiscme8s-Q-TUBSfqu-C2h81c-WAUtz-A5b4-Ri-Ze-XXHkq-Bfo-JH-y-Dl-Vx-FEt.jpg",
    "https://i.ibb.co/Z66LP66y/z-Cr-d1-Eg-OP4-I7-ZOi1-Sg-OEl8m-KFdejq-X0n-JTba-SAC5iym-BF7tq-Ae-Vp4wcf-VICPXxv2-A1-SFdl6mq-Mn-GXlz.jpg",
    "https://i.ibb.co/mrKCQpmg/IMG-20251005-132725-182.jpg",
    "https://i.ibb.co/0y0y0Zxk/IMG-20251005-132808-626.jpg",
    "https://i.ibb.co/WNV84htw/IMG-20251008-011720-518.jpg",
    "https://i.ibb.co/3mFgjb3m/IMG-20251008-011726-452.jpg",
    "https://i.ibb.co/bRX5ZnG2/IMG-20251008-011729-797.jpg",
    "https://i.ibb.co/4R9VRQ4c/IMG-20251008-011734-403.webp",
    "https://i.ibb.co/Kcv91k3h/IMG-20251008-011811-175.jpg",
    "https://i.ibb.co/jPDNPMQT/IMG-20251008-011824-036.jpg",
    "https://i.ibb.co/xt48Gt8R/IMG-20251008-011828-206.jpg"
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
