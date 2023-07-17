const isWebp = () => {
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {
        let className = support ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
};

const moveBlocksReset = () => {
    const car = document.querySelector('.car');
    const carImg = car.querySelector('.car__img');
    const carText = car.querySelector('.car__header');
    
    carImg.hasAttribute('style') ? car.removeAttribute('style') : false;
    carText.hasAttribute('style') ? carText.removeAttribute('style') : false;
}

const moveBlocksTwoReset = () => {
    const about = document.querySelector('.about__container');
    const list = about.querySelector('.about__list');
    const items = about.querySelectorAll('.about__item');

    items.forEach((item, i) => {
        item.hasAttribute('style') ? item.removeAttribute('style') : false;
    });

    list.classList.remove('about__list--up');
    list.classList.add('about__list--down');
};

const startBlur = (evt) => {
    let transition = document.createElement('div');
    transition.classList.add('blur-transition');
    transition.classList.add('blur-transition--open');
    document.body.appendChild(transition);
    window.scrollTo(0, 0);
    
    setTimeout(function() {
      document.body.removeChild(transition);
    }, 1500);
};

const toggleIndex = () => {
    const body = document.body;
    const indexDriver = document.querySelector('.index-driver');
    const indexClient = document.querySelector('.index-client');
    const btn = body.querySelector('.toggle-page__btn');
    
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();

        moveBlocksTwoReset()
        moveBlocksReset();

        if (body.classList.contains('index-driver--active')) {
            startBlur(evt);
            window.location.href = '#client';
            body.classList.remove('index-driver--active');
            body.classList.add('index-client--active');

            setTimeout(() => {
                indexClient.classList.remove('visually-hidden');
                indexDriver.classList.add('visually-hidden');
            }, 200)
        } else {
            startBlur(evt);
            window.location.href = '#driver'
            body.classList.remove('index-client--active')
            body.classList.add('index-driver--active')

            setTimeout(() => {
                indexDriver.classList.remove('visually-hidden');
                indexClient.classList.add('visually-hidden');
            }, 200)
        }
    });
}

isWebp();
toggleIndex();