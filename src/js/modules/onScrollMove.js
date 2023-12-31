export const onScrollMove = () => {
    const time = document.querySelector('.time');

    if (!time) return;

    const wrapperOne = time.querySelector('.time__wrapper-1');
    const wrapperTwo = time.querySelector('.time__wrapper-2');
    let timeTop = time.getBoundingClientRect().top + window.scrollY;
    let differenceThree = window.scrollY - timeTop;
    let differenceThreeEnd = 0;
    let differenceGapThree = 200;
    let firstTime = true;

    const moveBlocksResetTwo = () => {
        wrapperOne.hasAttribute('style') ? wrapperOne.removeAttribute('style') : false;
        wrapperTwo.hasAttribute('style') ? wrapperTwo.removeAttribute('style') : false;
    }
    
    const moveBlocksOne = () => {
        if (window.scrollY > timeTop) {
            wrapperOne.style.transform = `translateX(-${differenceThree / 10}%)`;

            if (differenceThree >= differenceGapThree) {
                const opacity = differenceThreeEnd / 700 < 1 ? differenceThreeEnd / 700 : 1;
                wrapperTwo.style.opacity = `${(opacity).toFixed(3)}`;
            }
        } else {
            moveBlocksResetTwo();
        }

        requestAnimationFrame(moveBlocksOne);
    };
    moveBlocksOne();



    const car = document.querySelector('.car');

    if (!car) return;

    const carImg = car.querySelector('.car__img');
    const carText = car.querySelector('.car__header');
    let carTop = car.getBoundingClientRect().top + window.scrollY;
    let differenceOne = window.scrollY - carTop;

    const moveBlocksReset = () => {
        carImg.hasAttribute('style') ? car.removeAttribute('style') : false;
        carText.hasAttribute('style') ? carText.removeAttribute('style') : false;
    }

    const moveBlocks = () => {
        if (window.scrollY > carTop) {
            carText.style.transform = `translate(-${differenceOne / 10}%,0)`;
            carImg.style.transform = `translate(-${differenceOne / 10}%,-50%)`;
        } else {
            moveBlocksReset();
        }

        requestAnimationFrame(moveBlocks);
    };
    moveBlocks();



    const about = document.querySelector('.about__container');

    if (!about) return;
    
    const list = about.querySelector('.about__list');
    const items = about.querySelectorAll('.about__item');

    let aboutHeight = (items[0].offsetWidth) * items.length + window.innerHeight;
    let aboutTop = about.getBoundingClientRect().top + window.scrollY;
    let allowHeightItem =  aboutHeight / items.length;
    let differenceTwo = window.scrollY - aboutTop;
    let currentStep = 0;

    about.style.height = `${aboutHeight}px`;

    const moveBlocksTwoReset = () => {
        items.forEach((item, i) => {
            item.hasAttribute('style') ? item.removeAttribute('style') : false;
        });

        list.classList.remove('about__list--up');
        list.classList.add('about__list--down');
    };
    
    const moveBlocksTwo = () => {
        if (window.scrollY + window.innerHeight / 2 > aboutTop) {
            list.classList.remove('about__list--down');
            list.classList.add('about__list--up');

            if (window.scrollY > aboutTop) {
                items.forEach((item, i) => {
                    currentStep = differenceTwo - allowHeightItem * i;
                    
                    if (differenceTwo > allowHeightItem * i) {
                        item.style.transform = `translateX(-${currentStep}px)`;
                    } else {
                        item.style.transform = `translateX(0px)`;
                    }
                });
            } else {
                items[0].style.transform = `translateX(0px)`;
            }
        } else {
            moveBlocksTwoReset();
        }

        requestAnimationFrame(moveBlocksTwo);
    };
    moveBlocksTwo();


    window.addEventListener('scroll', () => {
        differenceOne = window.scrollY - carTop;
        differenceTwo = window.scrollY - aboutTop;
        differenceThree = window.scrollY - timeTop;
        differenceThreeEnd = window.scrollY - timeTop - differenceGapThree;

        if (differenceThree >= differenceGapThree && firstTime) {
            firstTime = false;
        }
    });


    window.addEventListener('resize', () => {
        moveBlocksReset();
        moveBlocksTwoReset();

        carTop = car.getBoundingClientRect().top + window.scrollY;
        differenceOne = window.scrollY - carTop;


        aboutHeight = (items[0].offsetWidth) * items.length + window.innerHeight;
        aboutTop = about.getBoundingClientRect().top + window.scrollY;
        allowHeightItem =  aboutHeight / items.length;
        differenceTwo = window.scrollY - aboutTop;
        currentStep = 0;

        about.style.height = `${aboutHeight}px`;
    });
};