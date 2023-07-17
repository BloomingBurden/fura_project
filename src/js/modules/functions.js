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

const startBlur = (evt) => {
    let transition = document.createElement('div');
    transition.classList.add('blur-transition');
    transition.classList.add('blur-transition--open');
    document.body.appendChild(transition);

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