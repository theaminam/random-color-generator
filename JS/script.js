"use strict";
const button = document.querySelector(".clr-generator");
const colorCode = document.querySelector(".clr-code");
const copyMessage = document.querySelector(".copy-message");
// Convert numbers of color to Hexadecimal.
function convertToHex(number) {
  const num = number.toString(16).padStart(2, "0");
  return num;
}
// This function create a random color for background of site.
const generateColor = function generateColor() {
  const redNumber = Math.floor(Math.random() * 256);
  const greenNumber = Math.floor(Math.random() * 256);
  const blueNumber = Math.floor(Math.random() * 256);
  const redHex = convertToHex(redNumber);
  const greenHex = convertToHex(greenNumber);
  const blueHex = convertToHex(blueNumber);
  const color = `#${redHex}${greenHex}${blueHex}`;
  return color;
};
// When we click on button background color is change also color code is change.
button.addEventListener("click", function () {
  const colorNum = generateColor();
  document.body.style.backgroundColor = colorNum;
  colorCode.textContent = colorNum;
});
// This function for when user click on color code then color code copied in clipboard
colorCode.addEventListener("click", function () {
  const color = colorCode.textContent.toUpperCase();
  navigator.clipboard.writeText(color).then(function () {
    copyMessage.classList.add("show");
    setTimeout(() => {
      copyMessage.classList.remove("show");
    }, 1500);
  });
});
