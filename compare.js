//Left Side Back Script
const designSelect = document.getElementById("designSelect");
const shirtBase = document.getElementById("shirtBase");
const designOverlay = document.getElementById("designOverlay");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const backimages = ["Cartoon-pride.png","Cartoon-Red-Pins.png","cartoon-stars.png","Old-Map-Flags.png","Old-Map-Pins.png","pride-map-pins.png"]
const frontimages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","lines-badge.png","lines-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png"]

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
// Right side Back Script
// -------------------------------------------
const designSelectRight = document.getElementById("designSelectRight");
const shirtBaseRight = document.getElementById("shirtBaseRight");
const designOverlayRight = document.getElementById("designOverlayRight");
const buttonsRight = document.querySelectorAll(".shirt-buttonR");
const shirtLabelRight = document.getElementById("shirtLabelRight");

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

//Compar Front Left Functions
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
