let currentExpression = "12 + 8 × 3";

function appendValue(value) {
    if (currentExpression === "12 + 8 × 3") {
        currentExpression = "";
    }
    if (value === '()') {
        if (currentExpression.includes('(') && !currentExpression.includes(')')) {
            currentExpression += ')';
        } else {
            currentExpression += '(';
        }
    } else {
        currentExpression += value;
    }
    document.getElementById('expression').innerText = currentExpression;
}

function clearScreen() {
    currentExpression = "";
    document.getElementById('expression').innerText = "";
    document.getElementById('result').innerText = "0";
}

function calculate() {
    if (currentExpression === "") return;
    try {
        let evalString = currentExpression
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
        let kq = eval(evalString);
        document.getElementById('result').innerText = kq;
        currentExpression = kq.toString();
    } catch (error) {
        document.getElementById('result').innerText = "Lỗi";
        currentExpression = "";
    }
}