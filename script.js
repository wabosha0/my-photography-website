(function () {
    // Current year in the footer
    var yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Lightbox (only on pages that have one)
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        return;
    }

    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = lightbox.querySelector('.close');

    function openLightbox(src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.hidden = false;
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = '';
    }

    document.querySelectorAll('.gallery-image').forEach(function (img) {
        img.addEventListener('click', function () {
            openLightbox(img.src, img.alt);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Click outside the image closes it
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Escape key closes it
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !lightbox.hidden) {
            closeLightbox();
        }
    });
})();
