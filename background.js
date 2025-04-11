const designSelect = document.getElementById("designSelect");
const colorBase = document.getElementById("colorBase");
const design = document.getElementById("design");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const designLabel = document.getElementById("designLabel")
const images = ["pride.png","30th-green.png","cartoon-30th.png","cartoon-front.png","cartoon-markers.png","cartoon-pride-1.png",
    "cartoon-pride-2.png","cartoon-pride-3.png","cartoon-pins.png","cartoon-yellow-stars.png","drawn-compass.png","lines-30.png",
    "old.png","old-flags-back.png","old-pins-back.png","pride-badge.png","stay-salty.png","steampunk.png","vector-compass.png",
    "Wreath-light.png","vector-compass-light.png","steampunk-light.png","stay-salty-light.png","old-light.png","vector-30th-light.png",
    "drawn-compass-light.png","cartoon-light.png","cartoon-30th-light.png","30th-green-light.png",];
const imageNames = ["Pride Map","Green 30th","Cartoon 30th","Cartoon Front","Cartoon Markers","Cartoon Pride 1","Cartoon Pride 2","Cartoon Pride 3",
    "Cartoon Pins","Cartoon Yellow Stars","Illustrated Compass","Vector 30th","Old Map Front","Old Map With Flags","Old Map With Pins",
    "Pride Badge","Stay Salty","Steampunk Compass","Vector Compass","Wreath Light Font","Vector Compass Light Font","Steampunk Compass Light Font",
    "Stay Salty Light Font","Old Map Front Light Font","Vector 30th Light Font","Illustrated Compass Light","Cartoon Front Light Font",
    "Cartoon 30th Light Font","Green 30th Light Font"]
designSelect.addEventListener("change", () => {
    design.src = "./images/all-designs/"+ designSelect.value;
    designLabel.textContent = designSelect.options[designSelect.selectedIndex].text
})

buttons.forEach (button => {
    button.addEventListener("click", () => {
        const shirtFile = button.getAttribute("data-label");
        colorBase.src = "./images/color-backgrounds/" + shirtFile + ".png";
        shirtLabel.textContent = shirtFile;
    })
})

window.addEventListener ("load", () => {
    document.getElementById("designSelect").selectedIndex = 0;
})

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentIndex = 0;

previousButton.addEventListener("click", function () {
    if (currentIndex === 0) {
        currentIndex = images.length
    }
    currentIndex -= 1;
    design.src = `./images/all-designs/${images[currentIndex]}`;
    designLabel.textContent = imageNames[currentIndex]
})

nextButton.addEventListener("click", function () {
    lastIndex = images.length -1;
    if (currentIndex === lastIndex) {
        currentIndex = -1;
    }
    currentIndex += 1;
    design.src = `./images/all-designs/${images[currentIndex]}`;
    designLabel.textContent = imageNames[currentIndex]
})

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        const lastIndex = images.length-1;
        if (currentIndex === lastIndex) {
            currentIndex = -1;
        }
        currentIndex += 1;
        design.src = `./images/all-designs/${images[currentIndex]}`
        designLabel.textContent = imageNames[currentIndex]
    } else if (event.key === "ArrowLeft") {
        if (currentIndex === 0) {
            currentIndex = images.length;
        }
        currentIndex -= 1;
        design.src = `./images/all-designs/${images[currentIndex]}`  
        designLabel.textContent = imageNames[currentIndex]  
    }
})