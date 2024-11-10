function appendCharacter(char) {
    document.getElementById('result').value += char;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculate() {
    let currentResult = document.getElementById('result').value;
    let result = eval(currentResult);
    document.getElementById('result').value = result;
}