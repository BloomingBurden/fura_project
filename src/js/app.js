import './modules/functions.js';
import './modules/moveEffect.js';
import { onScrollMove } from './modules/onScrollMove.js';
import { elementMove } from './modules/elementMove.js';

window.addEventListener('load', () => {
    onScrollMove();

    elementMove(window, '.d-preview__images');
    elementMove(window, '.orders__image');
});