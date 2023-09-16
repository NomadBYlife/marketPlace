export function animationIn() { 
    let elem = document.querySelector('.modalWindow__increase_wrap')
    let pos = -100;
    let timerId = setInterval(frame, 1);
    function frame() {
        if (pos === 0) {
            clearInterval(timerId);
        } else {
            pos++; 
            elem.style.top = pos + '%';
        }
    }
} 

export function animationOut() { 
    let elem = document.querySelector('.modalWindow__increase_wrap')
    let pos = 0;
    let timerId = setInterval(frame, 1);
    function frame() {
        if (pos === -100) {
            clearInterval(timerId);
            elem.remove();
        } else {
            pos--; 
            elem.style.top = pos + '%';
        }
    }
} 

const count = function getCount() {
    let c = 0;
    return function () {
        c++
        return c
    }
}
export const counterId = count()