const mario = document.querySelector('.mario');

const jump1 = () => { 
    mario.classList.add('jump'); 

    setTimeout(() => {

        mario.classList.remove('jump'); 

    },550);
} 

document.addEventListener('keydown', jump1);