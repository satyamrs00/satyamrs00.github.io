const background = "#000";
const mainText = "#F3EDE9";
const headText = "#FFFFFF";
const pinkGradient = "linear-gradient(to right, #CD32C4, #9f94c6)";
const pinkColor = "#CD32C4";
const cursorCoverColor = "#9f94c6";
const imageShadowColor = "#F3EDE9AA";
const blueYellowGradient = "linear-gradient(to right bottom, #365163, #635536)";
const greenGradient = "linear-gradient(to right bottom, #6E8464, #2B5135)";
const blueBlackGradient = "linear-gradient(to left bottom, #434B66, #000)";
const cursorMixBlendMode = "screen";

const backgroundL = "#fff";
const mainTextL = "#414247";
const headTextL = "#000";
const pinkGradientL = "linear-gradient(to right, #db6bd5, #A499C9)";
const pinkColorL = "#db6bd5";
const cursorCoverColorL = "#a499c9";
const imageShadowColorL = "#000000AA";
const blueYellowGradientL = "linear-gradient(to right bottom, #a3bccd, #cdc0a3)";
const greenGradientL = "linear-gradient(to right bottom, #c5cfc0, #9ac9a7)";
const blueBlackGradientL = "linear-gradient(to left bottom, #adb3c9, #fff)";
const cursorMixBlendModeL = "darken";


document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('light-mode');
    el.addEventListener('click', () => {
        let r = document.querySelector(':root');

        if (getComputedStyle(r).getPropertyValue('--background') == background) {
            console.log('log');
            r.style.setProperty('--background', backgroundL);
            r.style.setProperty('--main-text', mainTextL);
            r.style.setProperty('--head-text', headTextL);
            r.style.setProperty('--pink-gradient', pinkGradientL);
            r.style.setProperty('--pink-color', pinkColorL);
            r.style.setProperty('--cursor-cover-color', cursorCoverColorL);
            r.style.setProperty('--image-shadow-color', imageShadowColorL);
            r.style.setProperty('--blue-yellow-gradient', blueYellowGradientL);
            r.style.setProperty('--green-gradient', greenGradientL);
            r.style.setProperty('--blue-black-gradient', blueBlackGradientL);
            r.style.setProperty('--cursor-mix-blend-mode', cursorMixBlendModeL);
        } else {
            r.style.setProperty('--background', background);
            r.style.setProperty('--main-text', mainText);
            r.style.setProperty('--head-text', headText);
            r.style.setProperty('--pink-gradient', pinkGradient);
            r.style.setProperty('--pink-color', pinkColor);
            r.style.setProperty('--cursor-cover-color', cursorCoverColor);
            r.style.setProperty('--image-shadow-color', imageShadowColor);
            r.style.setProperty('--blue-yellow-gradient', blueYellowGradient);
            r.style.setProperty('--green-gradient', greenGradient);
            r.style.setProperty('--blue-black-gradient', blueBlackGradient);
            r.style.setProperty('--cursor-mix-blend-mode', cursorMixBlendMode);
        }
    });
});