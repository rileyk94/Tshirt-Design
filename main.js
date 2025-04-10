const designSelect = document.getElementById("designSelect");
const shirtBase = document.getElementById("shirtBase");
const designOverlay = document.getElementById("designOverlay");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const frontImages = ["Steampunk-round-badge.png","30-green-badge.png","Drawn-round-badge.png","line-round-badge.png","lines-badge.png","lines-badge.png","lines-badge.png","wreath-badge.png","Steampunk-round-large.png","30-green-large.png","Drawn-round-large.png","line-round-large.png","lines-large.png","stay-salty-large.png","wreath-large.png","cartoon-front-anniversary.png","cartoon-front-overlay.png","old-flag-front.png","old-pin-front.png"]
//Main Button Functions
designSelect.addEventListener("change", () => {
    designOverlay.src = "./images/front-designs/" + designSelect.value;
})

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-shirt");
        const label = button.getAttribute("data-label");
        shirtBase.src = "./images/shirt-fronts/" + shirtFile;
        shirtLabel.textContent = label;
    })
})
//cycle button functions
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const lastIndex = frontImages.length - 1;

previousButton.addEventListener("click", function() {
    if (currentIndex === 0) {
        currentIndex = frontImages.length
    }
    currentIndex = currentIndex-1
    designOverlay.src = "./images/front-designs/" + frontImages[currentIndex]
})

nextButton.addEventListener("click", function() {
    if (currentIndex === lastIndex) {
        currentIndex = 0
    }
    currentIndex = currentIndex+1
    designOverlay.src = "./images/front-designs/" + frontImages[currentIndex]
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentIndex === lastIndex) {
            currentIndex = 0
        }
        currentIndex = currentIndex+1
        designOverlay.src = "./images/front-designs/" + frontImages[currentIndex]
    }
    else if (event.key == 'ArrowLeft') {
        if (currentIndex === 0) {
            currentIndex = frontImages.length
        }
        currentIndex = currentIndex-1
        designOverlay.src = "./images/front-designs/" + frontImages[currentIndex]
    }
})

