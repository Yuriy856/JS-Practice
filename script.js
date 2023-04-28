

// POPUP
const singIn = document.querySelector('.singIn-link');
const popup = document.querySelector('.popup__active');
const popupClose = document.querySelector('.popup__close');

singIn.addEventListener('click', () => {
    popup.style.opacity = 1;
    popup.style.visibility = "visible";
});

popupClose.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.visibility = "hidden";
});

// ./ POPUP


// CONVERTER

const convInput = document.querySelector('.converter__input');

function FarenheitForCelsius() {
    convInput.addEventListener('input', () => {
        const span = document.querySelector(".conv__resulr")

        let celsius = (5 / 9) * (convInput.value - 32);
        span.innerHTML = parseFloat(celsius.toFixed(1)); // 24.44 in Celsius

        if (span.innerHTML == "NaN") {
            span.innerHTML = "Введіть число!";
        }

        if (convInput.value === null || convInput.value === undefined || convInput.value === "") {
            span.innerHTML = "0";
        }
    });
}

FarenheitForCelsius();



function CelsiusForFarenheit() {
    convInput.addEventListener('input', () => {
        const span = document.querySelector(".conv__resulr")

        let fahrenheit = convInput.value * 9.0 / 5 + 32;
        span.innerHTML = parseFloat(fahrenheit.toFixed(1)); // 24.44 in Celsius

        if (span.innerHTML == "NaN" ) {
            span.innerHTML = "Введіть число!";
        }
        if (convInput.value === null || convInput.value === undefined || convInput.value === "") {
            span.innerHTML = "0";
        }
    });
} 

convInput.placeholder = "F";



// ./ CONVERTER

// SWITCH 

// const switchActive = document.querySelector('.switch__active');
const switchDiv = document.querySelector('.switch');

switchDiv.addEventListener("click", () => {
    const justifyContent = getComputedStyle(switchDiv).justifyContent;
    const converterLabel = document.querySelector('.converter__label');
    const converterTitle = document.querySelector('.converter__title');
    const resultText = document.querySelector('.converter__result-text');
    const convTemperatur = document.querySelector('.conv__temperatur');

    if (justifyContent === "flex-start") {

        switchDiv.style.justifyContent = "flex-end";

        converterLabel.innerHTML = "Введіть Градуси Цельсію:";
        converterTitle.innerHTML = "Конвертер Градусів Цельсію в Градуси по Фарингейту";
        resultText.innerHTML = "Градуси по Фарингейту";
        convTemperatur.innerHTML = "F";
        convInput.placeholder = "C";
        CelsiusForFarenheit();
    } else if (justifyContent === "flex-end") {

        switchDiv.style.justifyContent = "flex-start";

        converterLabel.innerHTML = "Введіть Градуси по Фарингейту:";
        converterTitle.innerHTML = "Конвертер Градусів по Фарингейту в Градуси Цельсію";
        resultText.innerHTML = "Градусів Цельсію:";
        convTemperatur.innerHTML = "C";
        convInput.placeholder = "F";
        FarenheitForCelsius();
    }
});



// switchDiv.classList.add('switch__active')




import * as sumOfNumb from "./add.js";

console.log(sumOfNumb);


