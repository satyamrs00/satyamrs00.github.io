document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {

        // Pizza images
        const els1 = document.querySelectorAll('.hint-to-scroll-left');
        [...els1].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'hintToScrollLeft 2s ease-in-out 2 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els2 = document.querySelectorAll('.from-right-center');
        [...els2].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'fromRightCenter 1s ease-out 0.4s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els3 = document.querySelectorAll('.from-left-top');
        [...els3].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'fromLeftTop 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els4 = document.querySelectorAll('.from-right-top');
        [...els4].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'fromRightTop 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els5 = document.querySelectorAll('.come-from-left');
        [...els5].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'comeFromLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els6 = document.querySelectorAll('.come-from-far-left');
        [...els6].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                if(el.classList.contains('contacticon')) {
                    let delay = rect.left / window.innerWidth;
                    console.log(delay);
                    el.style.animation = `comeFromFarLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s 1 forwards`;
                } else {
                    el.style.animation = 'comeFromFarLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
                }
             } else {
                el.style.animation = '';
                delay = 0
            }
        });

        const els7 = document.querySelectorAll('.fade-up');
        [...els7].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'fadeUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });

        const els8 = document.querySelectorAll('.rotate-from-center');
        [...els8].forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.animation = 'rotateFromCenter 1s ease-in 0.2s 1 forwards';
            } else {
                el.style.animation = '';
            }
        });
    });
});