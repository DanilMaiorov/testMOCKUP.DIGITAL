export const problemsSlider = () => {
    const slides = document.querySelectorAll('.wrapper-problems');
    const prev = document.querySelector('.problems-arrow__prev');
    const next = document.querySelector('.problems-arrow__next');

    const total = document.querySelector('.problems-number__total');
    const current = document.querySelector('.problems-number__curr');
    total.textContent = slides.length;
    current.textContent = 1;
    let slideIndex = 1;
        const showSlides = (n) => {
            if(n > slides.length) {
                slideIndex = 1;
            }
            if(n < 1) {
                slideIndex = slides.length;
            }
            slides.forEach(item => {
                item.style.display = 'none';
            });
            slides[slideIndex - 1].style.display = 'flex';
            current.textContent = slideIndex;
        };
    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    };
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });
    next.addEventListener('click', () => {
        plusSlides(1);
    });
    window.addEventListener('resize', () => {
        if(window.innerWidth < 576) {
            slides.forEach(item => {
                item.style.display = 'none';
            });
        }
        if(window.innerWidth > 576 && window.innerWidth < 768) {
            slides.forEach(item => {
                item.style.display = 'flex';
            });
            current.textContent = slideIndex = 1;
        }

    }); 
};