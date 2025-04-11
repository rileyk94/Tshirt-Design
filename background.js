const designSelect = document.getElementById("designSelect");
const colorBase = document.getElementById("colorBase");
const design = document.getElementById("design");
const buttons = document.querySelectorAll(".shirt-button");
const shirtLabel = document.getElementById("shirtLabel");
const images = [];

designSelect.addEventListener("change", () => {
    design.src = "./images/all-designs/"+ designSelect.value;
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