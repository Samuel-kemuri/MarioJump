const mario = document.querySelector('.mario');

const jump1 = () => { 
    mario.classList.add('jump'); 
} 

document.addEventListener('keydown', jump1);