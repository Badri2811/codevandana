let result = document.getElementById('result');
let currentInput = '';

function appendCharacter(char) {
    if (result.value == "Error") {
        clearDisplay();
    }
    currentInput += char;
    result.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    result.value = '';
}

function calculate() {
    let y = eval(result.value);
    result.value = y
    currentInput = result.value;
}