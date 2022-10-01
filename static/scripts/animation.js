document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {

        // Pizza images
        const images = document.querySelectorAll('.pizzaimg');
        [...images].forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                image.style.animation = 'hintToScrollLeft 2s ease-in-out 3 forwards';
            } else {
                image.style.animation = '';
            }
        });

        
    });
});