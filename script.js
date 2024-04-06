import images from "./imag.js"

const catGifs = images;
let currentCatIndex = 0;
let buttonClicked = false;

function toggleCatGif() {
    currentCatIndex = (currentCatIndex + 1) % catGifs.length;
    const gifContainer = document.getElementById('gif-container');
    const catGif = document.getElementById('cat-gif');
    catGif.src = catGifs[currentCatIndex];
    gifContainer.classList.remove('hidden');

    // Hide the hearts when the button is clicked
    const hearts = document.querySelector('.hearts');
    if (!buttonClicked) {
        hearts.classList.add('hidden');
        const buttonIcon = document.querySelector('.button-icon');
        buttonIcon.textContent = 'click for more goofy meme :3';
        buttonClicked = true;
    }
}

// Event listener for the button
document.querySelector('.button-icon').addEventListener('click', toggleCatGif);
