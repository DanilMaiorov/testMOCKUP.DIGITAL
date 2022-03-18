export const topSlider = () => {
    const slides = document.querySelectorAll('.item-result');
    const prev = document.querySelector('.arrow-prev-top__button');
    const next = document.querySelector('.arrow-next-top__button');
    const total = document.querySelector('.result-number__total');
    const current = document.querySelector('.result-number__curr');
    let slideIndex = 1;
    total.textContent = slides.length;
    current.textContent = 1;

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
            slides[slideIndex - 1].style.display = 'block';
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
        if(window.innerWidth > 375) {
            slides.forEach(item => {
                item.style.display = 'block';
            });
            current.textContent = slideIndex = 1;
        }
    });

};