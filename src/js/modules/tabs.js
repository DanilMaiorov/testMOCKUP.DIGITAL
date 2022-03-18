export const tabs = () => {
    const tabs = document.querySelectorAll('.tabs-steps__item');
    const cardTabs = document.querySelectorAll('.item-steps');

    if(window.innerWidth > 576 && window.innerWidth < 992) {
        Array.from(cardTabs).reverse().forEach((tabCard, index) => {
            tabCard.dataset.tab = index;
        });
            tabs.forEach((item, ind) => {
                item.dataset.tab = ind;
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    tabs.forEach(childItem => {
                        childItem.classList.remove('active-tab');
                    });
                    Array.from(cardTabs).reverse().forEach((tabCard, index) => {
                        tabCard.classList.remove('active-card');
                        if(ind === index) {
                            tabCard.classList.add('active-card');
                        }
                    });
                    item.classList.add('active-tab');
                });
            });
    }
                    window.addEventListener('resize', () => {
                    if(window.innerWidth < 576) {
                        document.querySelectorAll('.tabs-steps__item')[5].click();
                    }
                });
        const tab = document.querySelectorAll('.tabs-steps__item')[5].click();
};