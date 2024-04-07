import images from "./imag.js"

const memesOrGifs = images;
let currentCatIndex = 0;
let buttonClicked = false;

function toggleCatGif() {
    currentCatIndex = (currentCatIndex + 1) % memesOrGifs.length;
    const gifContainer = document.getElementById('gif-container');
    const catGif = document.getElementById('meme-gif');
    catGif.src = memesOrGifs[currentCatIndex];
    gifContainer.classList.remove('hidden');


    

    // hide start screen once event button is clicked
    const start = document.querySelector('.start');
    if (!buttonClicked) {
        start.classList.add('hidden');
        const buttonIcon = document.querySelector('.button-icon');
        buttonIcon.textContent = 'click for more goofy meme :3';
        buttonClicked = true;
    }
}

// event listener for the button
document.querySelector('.button-icon').addEventListener('click', toggleCatGif);
