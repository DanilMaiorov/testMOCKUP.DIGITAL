export const stepsSlider = () => {
    const slides = document.querySelectorAll('.item-steps');
    const prev = document.querySelector('.arrow-prev__button');
    const next = document.querySelector('.arrow-next__button');
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
                item.classList.remove('active-card');
            });
            slides[slideIndex - 1].style.display = 'flex';
            slides[slideIndex - 1].classList.add('active-card');
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
        if(window.innerWidth > 576) {
            slides.forEach(item => {
                item.style.display = 'flex';
            });
        }
        slideIndex = 1;
    });

};