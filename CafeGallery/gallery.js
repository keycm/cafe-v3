document.addEventListener('DOMContentLoaded', () => {

    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');

    if (galleryItems.length > 0 && lightbox) {
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                lightboxImg.src = imgSrc;
                lightbox.style.display = 'block';
            });
        });

        const close = () => {
            lightbox.style.display = 'none';
        };

        // Close lightbox when clicking the close button
        if (closeLightbox) {
            closeLightbox.addEventListener('click', close);
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                close();
            }
        });

        // Close lightbox with the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                close();
            }
        });
    }

});