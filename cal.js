const resultDisplay = document.getElementById('result');
let expression = "";

// Update display
const updateDisplay = () => {
    resultDisplay.value = expression || "0";
};

// Clear display
document.getElementById('clear').addEventListener('click', () => {
    expression = "";
    updateDisplay();
});

// Delete last character
document.getElementById('cut').addEventListener('click', () => {
    expression = expression.slice(0, -1);
    updateDisplay();
});

// Add functionality to number and operator buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent; // Use textContent for button elements
        if (value === '=') {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = "Error";
            }
        } else if (value !== 'C' && value !== 'DEL') {
            expression += value;
        }
        updateDisplay();
    });
});

// Allow keyboard input
document.addEventListener('keydown', (event) => {
    if (/[0-9\+\-\*\/\.%]/.test(event.key)) {
        expression += event.key;
    } else if (event.key === "Enter" || event.key === "=") {
        try {
            expression = eval(expression).toString();
        } catch {
            expression = "Error";
        }
    } else if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
    } else if (event.key === "Escape") {
        expression = "";
    }
    updateDisplay();
});

