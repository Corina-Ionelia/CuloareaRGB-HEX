const btnChange = document.querySelector('#btn-change');
const spanRgb = document.querySelector('#rgb');
const spanHex = document.querySelector('#HEX'); // Corectat

btnChange.addEventListener('click', () => {
    // Generare valori aleatoare pentru culoare
    const red = generateRandomNumber();
    const green = generateRandomNumber();
    const blue = generateRandomNumber();

    // Creare șir RGB
    const rgbString = `rgb(${red}, ${green}, ${blue})`;

    // Creare șir HEX
    const hexString = `#${convertNumber(red)}${convertNumber(green)}${convertNumber(blue)}`;

    // Populare span
    spanRgb.innerText = rgbString;
    spanHex.innerText = hexString;

    // Schimbare culoare de fundal
    document.body.style.backgroundColor = rgbString;

    // Logare în consolă
    console.log(rgbString);
    console.log(hexString);

    // Logare valori individuale pentru verificare
    console.log(`Red: ${red}, Hex: ${convertNumber(red)}`);
    console.log(`Green: ${green}, Hex: ${convertNumber(green)}`);
    console.log(`Blue: ${blue}, Hex: ${convertNumber(blue)}`);
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 256); // Număr aleator între 0 și 255
}

function convertNumber(value) {
    return value.toString(16).padStart(2, '0'); // Convertire număr în hexazecimal cu 2 cifre
}