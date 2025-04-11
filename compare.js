//Left Side Back Script
const designSelect = document.getElementById("designSelect");
const shirtBase = document.getElementById("shirtBase");
const designOverlay = document.getElementById("designOverlay");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const leftImages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","lines-badge.png","lines-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png","Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

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
// Left Side Front Script
// --------------------------------------------
const designSelectFL = document.getElementById("designSelectFL");
const buttonsFL = document.querySelectorAll(".shirt-buttonFL");
const shirtLabelFL = document.getElementById("shirtLabelFL");

designSelectFL.addEventListener("change", () => {
    designOverlay.src = "./images/front-designs/" + designSelectFL.value;
})

buttonsFL.forEach(button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-shirt");
        const label = button.getAttribute("data-label");
        shirtBase.src = "./images/shirt-fronts/" + shirtFile;
        shirtLabelFL.textContent = label;
    })
})

//Left side cycle images
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");

// let currentIndex = 0;
// const lastIndex = backImages.length - 1;

// previousButton.addEventListener("click", function() {
//     if (currentIndex === 0) {
//         currentIndex = backImages.length
//     }
//     currentIndex = currentIndex-1
//     designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
// })

// nextButton.addEventListener("click", function() {
//     if (currentIndex === lastIndex) {
//         currentIndex = 0
//     }
//     currentIndex = currentIndex+1
//     designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
// })

// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight') {
//         if (currentIndex === lastIndex) {
//             currentIndex = 0
//         }
//         currentIndex = currentIndex+1
//         designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
//     }
//     else if (event.key == 'ArrowLeft') {
//         if (currentIndex === 0) {
//             currentIndex = backImages.length
//         }
//         currentIndex = currentIndex-1
//         designOverlay.src = "./images/back-designs/" + backImages[currentIndex]
//     }
// })

// Right side Back Script
// -------------------------------------------
const designSelectRight = document.getElementById("designSelectRight");
const shirtBaseRight = document.getElementById("shirtBaseRight");
const designOverlayRight = document.getElementById("designOverlayRight");
const buttonsRight = document.querySelectorAll(".shirt-buttonR");
const shirtLabelRight = document.getElementById("shirtLabelRight");
const rightImages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","lines-badge.png","lines-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png","Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

designSelectRight.addEventListener("change", () => {
    designOverlayRight.src = "./images/back-designs/" + designSelectRight.value;
})

buttonsRight.forEach(button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-shirt");
        const label = button.getAttribute("data-label");
        shirtBaseRight.src = "./images/shirt-backs/" + shirtFile;
        shirtLabelRight.textContent = label;
    })
})

// Right Front Script
// -----------------------------------------------
const designSelectFR = document.getElementById("designSelectFR");
const buttonsFR = document.querySelectorAll(".shirt-buttonFR");
const shirtLabelFR = document.getElementById("shirtLabelFR");

designSelectFR.addEventListener("change", () => {
    designOverlayRight.src = "./images/front-designs/" + designSelectFR.value;
})

buttonsFR.forEach(button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-shirt");
        const label = button.getAttribute("data-label");
        shirtBaseRight.src = "./images/shirt-fronts/" + shirtFile;
        shirtLabelFR.textContent = label;
    })
})



