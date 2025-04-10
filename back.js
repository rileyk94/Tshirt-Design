const designSelect = document.getElementById("designSelect");
const shirtBase = document.getElementById("shirtBase");
const designOverlay = document.getElementById("designOverlay");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const backImages = ["Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

designSelect.addEventListener("change", () => {
    designOverlay.src = "./images/back-designs/" + designSelect.value;
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-shirt");
        const label = button.getAttribute("data-label");
        shirtBase.src = "./images/shirt-backs/" + shirtFile;
        shirtLabel.textContent = label;
    })
})

//Cycle Buttons
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const lastIndex = backImages.length - 1;

previousButton.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = backImages.length
    }
    currentIndex = currentIndex-1
    designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
})

nextButton.addEventListener("click", function() {
    if (currentIndex === lastIndex) {
        currentIndex = 0
    }
    currentIndex = currentIndex+1
    designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentIndex === lastIndex) {
            currentIndex = 0
        }
        currentIndex = currentIndex+1
        designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
    }
    else if (event.key == 'ArrowLeft') {
        if (currentIndex === 0) {
            currentIndex = backImages.length
        }
        currentIndex = currentIndex-1
        designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
    }
})