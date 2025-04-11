const designSelectFront = document.getElementById("designSelectFront");
const designSelectBack = document.getElementById("designSelectBack");
const shirtBase = document.getElementById("shirtBase");
const designOverlay = document.getElementById("designOverlay");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const frontImages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","pride-badge.png","stay-salty-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png"]
const backImages = ["Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

//Main Button Functions
let isFront = true;
let currentColor = "White";
let currentDesign = isFront ? "Steampunk-round-badge" : "Cartoon-pride";

const toggleBtn = document.getElementById("toggleView")
updateDesignSelectorVisibility();
toggleBtn.addEventListener("click", () => {
    isFront = !isFront;
    updateShirtImage();
    updateDesignImage();
    updateDesignSelectorVisibility();
    toggleBtn.textContent = isFront ? "Show Back" : "Show Front";
})

function updateDesignSelectorVisibility() {
    if(isFront) {
        designSelectFront.style.display = "block";
        designSelectBack.style.display = "none";
    } else {
        designSelectFront.style.display = "none"
        designSelectBack.style.display = "block"
    }
}
function updateShirtImage() {
    const side = isFront ? "-Front" : "-Back"
    const path = `./images/${isFront ? 'shirt-fronts' : 'shirt-backs'}/${currentColor}${side}.png`;
    shirtBase.src = path;
}

function updateDesignImage() {
    currentDesign = isFront ? "Steampunk-round-badge.png" : "Cartoon-pride.png";
    const path = `./images/${isFront ? 'front-designs' : 'back-designs'}/${currentDesign}`;
    designOverlay.src = path;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        currentColor = button.getAttribute("data-color");
        updateShirtImage();
        shirtLabel.textContent = currentColor;
    })
})

designSelectFront.addEventListener("change", () => {
    currentDesign = designSelectFront.value;
    if (isFront) updateDesignImage();
})

designSelectBack.addEventListener("change", () => {
    currentDesign = designSelectBack.value;
    if (!isFront) updateDesignImage();
})

//Right Side
//-------------------------------------------------------------------------
const rightDesignSelectFront = document.getElementById("rightDesignSelectFront");
const rightDesignSelectBack = document.getElementById("rightDesignSelectBack");
const shirtBaseRight = document.getElementById("shirtBaseRight");
const designOverlayRight = document.getElementById("designOverlayRight");
const buttonsRight = document.querySelectorAll(".shirt-buttonR");
const shirtLabelRight = document.getElementById("shirtLabelRight");
const frontImagesRight = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","pride-badge.png","stay-salty-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png"]
const backImagesRight = ["Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

//Main Button Functions
let isFrontRight = true;
let currentColorRight = "White";
let currentDesignRight = isFrontRight ? "Steampunk-round-badge" : "Cartoon-pride";

const toggleBtnRight = document.getElementById("toggleViewRight")

updateDesignSelectorVisibilityRight();

toggleBtnRight.addEventListener("click", () => {
    isFrontRight = !isFrontRight;
    updateShirtImageRight();
    updateDesignImageRight();
    updateDesignSelectorVisibilityRight();
    toggleBtnRight.textContent = isFrontRight ? "Show Back" : "Show Front";
})

function updateDesignSelectorVisibilityRight() {
    if(isFrontRight) {
        rightDesignSelectFront.style.display = "block";
        rightDesignSelectBack.style.display = "none";
    } else {
        rightDesignSelectFront.style.display = "none"
        rightDesignSelectBack.style.display = "block"
    }
}
function updateShirtImageRight() {
    const side = isFrontRight ? "-Front" : "-Back"
    const path = `./images/${isFrontRight ? 'shirt-fronts' : 'shirt-backs'}/${currentColorRight}${side}.png`;
    shirtBaseRight.src = path;
}

function updateDesignImageRight() {
    currentDesignRight = isFrontRight ? "Steampunk-round-badge.png" : "Cartoon-pride.png";
    const path = `./images/${isFrontRight ? 'front-designs' : 'back-designs'}/${currentDesignRight}`;
    designOverlayRight.src = path;
}

buttonsRight.forEach(button => {
    button.addEventListener("click", () => {
        currentColorRight = button.getAttribute("data-colorR");
        updateShirtImageRight();
        shirtLabelRight.textContent = currentColorRight;
    })
})

rightDesignSelectFront.addEventListener("change", () => {
    currentDesignRight = rightDesignSelectFront.value;
    if (isFrontRight) updateDesignImageRight();
})

rightDesignSelectBackaddEventListener("change", () => {
    currentDesignRight = rightDesignSelectBack.value;
    if (!isFrontRight) updateDesignImageRight();
})

// Right side Back Script
// -------------------------------------------
// const designSelectRight = document.getElementById("designSelectRight");
// const shirtBaseRight = document.getElementById("shirtBaseRight");
// const designOverlayRight = document.getElementById("designOverlayRight");
// const buttonsRight = document.querySelectorAll(".shirt-buttonR");
// const shirtLabelRight = document.getElementById("shirtLabelRight");
// const rightImages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","lines-badge.png","lines-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png","Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]

// designSelectRight.addEventListener("change", () => {
//     designOverlayRight.src = "./images/back-designs/" + designSelectRight.value;
// })

// buttonsRight.forEach(button => {
//     button.addEventListener("click", () => {
//         const shirtFile = button.getAttribute("data-shirt");
//         const label = button.getAttribute("data-label");
//         shirtBaseRight.src = "./images/shirt-backs/" + shirtFile;
//         shirtLabelRight.textContent = label;
//     })
// })

// Right Front Script
// -----------------------------------------------
// const designSelectFR = document.getElementById("designSelectFR");
// const buttonsFR = document.querySelectorAll(".shirt-buttonFR");
// const shirtLabelFR = document.getElementById("shirtLabelFR");

// designSelectFR.addEventListener("change", () => {
//     designOverlayRight.src = "./images/front-designs/" + designSelectFR.value;
// })

// buttonsFR.forEach(button => {
//     button.addEventListener("click", () => {
//         const shirtFile = button.getAttribute("data-shirt");
//         const label = button.getAttribute("data-label");
//         shirtBaseRight.src = "./images/shirt-fronts/" + shirtFile;
//         shirtLabelFR.textContent = label;
//     })
// })



