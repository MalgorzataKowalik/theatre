const leftCurtain = document.querySelector('.left');
const rightCurtain = document.querySelector('.right');

let position = 0;


open = true;

const openCurtains = () => {
    if (position <= (-35)) {
        open = !open;
    }

    else if (position >= 0.5) {
        open = !open;
    }

    if (open) {
        position--;
    }
    else {
        position++
    }

    leftCurtain.style.left = position + '%';
    rightCurtain.style.right = position + '%';    
}



window.addEventListener('scroll', openCurtains)