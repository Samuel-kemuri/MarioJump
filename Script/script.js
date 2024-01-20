const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump1 = () => { 
    mario.classList.add('jump'); 

    setTimeout(() => {

        mario.classList.remove('jump'); 

    },550);
} 

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 126 && marioPosition <= 80){

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

    }

} , 10)

document.addEventListener('keydown', jump1);