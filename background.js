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
    "drawn-compass-light.png","cartoon-light.png","cartoon-30th-light.png","30th-green-light.png","",];

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