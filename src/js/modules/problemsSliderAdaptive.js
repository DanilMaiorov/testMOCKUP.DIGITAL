export const problemsSliderAdaptive = () => {
    const slides = document.querySelectorAll('.wrapper-problems-adaptive');
    const prev = document.querySelector('.problems-arrow__prev-adaptive');
    const next = document.querySelector('.problems-arrow__next-adaptive');
    const total = document.querySelector('.problems-number__total-adaptive');
    const current = document.querySelector('.problems-number__curr-adaptive');
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

};