export const elementMove = (wrapper=window, elem) => {
    const target = document.querySelector(elem);
    let wrap = null;

    if (wrapper !== window) {
        wrap = document.querySelector(wrapper);
    } else {
        wrap = window;
    }

    if (!target || !wrap) return;

    let left = null;
    let top = null;
    const moveElemRequest = () => {
        target.style.cssText = `transform: translate(${left / -30}px, ${top / -30}px)`;
        requestAnimationFrame(moveElemRequest);
    };

    moveElemRequest();

    wrap.addEventListener('mousemove', (evt) => {
        left = evt.clientX - window.innerWidth / 2;
        top = evt.clientY - window.innerHeight / 2;
    });
}