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

window.addEventListener("load", () => {
    // Reset both dropdowns to first option
    document.getElementById("designSelectFront").selectedIndex = 0;
    document.getElementById("designSelectBack").selectedIndex = 0;  
    // Set initial design based on default selector
    if (isFront) {
        currentDesign = document.getElementById("designSelectFront").value;
    } else {
        currentDesign = document.getElementById("designSelectBack").value;
    }

    // Make sure correct selector is visible
    updateDesignSelectorVisibility();
  
    // Load the starting image
    updateDesignImage();
  });

updateDesignSelectorVisibility();

toggleBtn.addEventListener("click", () => {
    isFront = !isFront;
    currentDesign = isFront ? document.getElementById("designSelectFront").value : document.getElementById("designSelectBack").value; 
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
// old code:--------------------------------------------------------------
// designSelect.addEventListener("change", () => {
//     designOverlay.src = "./images/front-designs/" + designSelect.value;
// })

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const shirtFile = button.getAttribute("data-shirt");
//         const label = button.getAttribute("data-label");
//         shirtBase.src = "./images/shirt-fronts/" + shirtFile;
//         shirtLabel.textContent = label;
//     })
// })
//-------------------------------------------------------------------------
//
// cycle button functions:
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

previousButton.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = isFront ? frontImages.length : backImages.length;
    }
    currentIndex = currentIndex-1
    designOverlay.src = `./images/${isFront ? 'front-designs/' : 'back-designs/'}${isFront ? frontImages[currentIndex] : backImages[currentIndex]}`;
})

nextButton.addEventListener("click", function() {
    const lastIndex = isFront ? (frontImages.length - 1) : (backImages.length-1);
    if (currentIndex === lastIndex) {
        currentIndex = -1
    }
    currentIndex = currentIndex+1
    designOverlay.src = `./images/${isFront ? 'front-designs/' : 'back-designs/'}${isFront ? frontImages[currentIndex] : backImages[currentIndex]}`
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        const lastIndex = isFront ? (frontImages.length - 1) : (backImages.length-1);
        if (currentIndex === lastIndex) {
            currentIndex = -1
        }
        currentIndex = currentIndex+1
        designOverlay.src = `./images/${isFront ? 'front-designs/' : 'back-designs/'}${isFront ? frontImages[currentIndex] : backImages[currentIndex]}`;
    }
    else if (event.key == 'ArrowLeft') {
        if (currentIndex === 0) {
            currentIndex = isFront ? frontImages.length : backImages.length;
        }
        currentIndex = currentIndex-1
        designOverlay.src = `./images/${isFront ? 'front-designs/' : 'back-designs/'}${isFront ? frontImages[currentIndex] : backImages[currentIndex]}`
    }
})

