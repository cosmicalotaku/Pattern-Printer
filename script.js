// Theme Changing logic
function changeTheme() {
    var themeIcon = document.getElementById("theme-button");
    var changeCss = document.getElementById("style-sheet");

    if (themeIcon.value == "light") {
        themeIcon.value = "dark";
        themeIcon.innerHTML = "🌞";
        changeCss.href = "style-dark.css";
    } else if (themeIcon.value == "dark") {
        themeIcon.value = "light";
        themeIcon.innerHTML = "🌙";
        changeCss.href = "style-light.css";
    }
}

var display = document.getElementById("generated-pattern");
function clearDisplay() {display.innerHTML = null;}

// Squared Pattern
function generateSquaredPattern(rows) {
    clearDisplay();

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < rows; j++) {
            display.innerHTML += "*&nbsp";
        }

        display.innerHTML += "<br>";
    }
}

// Squared Pattern
function generateTrianglePattern(rows) {
    clearDisplay();

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j <= i; j++) {
            display.innerHTML += "*&nbsp";
        }

        display.innerHTML += "<br>";
    }
}

// Daimond Pattern
function generatedDaimondPattern(rows) {
    clearDisplay();

    var midPoint = (rows - 1) / 2;
    var leftMargin = midPoint;
    var rightMargin = midPoint;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < rows; j++) {
            if (j >= leftMargin && j <= rightMargin) {
                display.innerHTML += "*&nbsp";
            } else {
                display.innerHTML += "&nbsp;&nbsp;";
            }
        }

        display.innerHTML += "<br>";

        if (i < midPoint) {
            leftMargin--;
            rightMargin++;
        } else {
            leftMargin++;
            rightMargin--;
        }
    }
}

// Pattern Generator
function generatePattern() {
    var selectedPattern = document.getElementById("pattern-selector").value;
    var numberOfRows = document.getElementById("number-1").value;
    var disclaimer = document.getElementById("disclaimer");

    if (numberOfRows == 0) {
        display.innerHTML = "Kindly Enter a Number";
    } else if (selectedPattern == 0) {
        display.innerHTML = "Kindly Select a Pattern";
    } else {
        numberOfRows >= 30 ? window.alert("Pattern may exceed the viewport!") : null;

        disclaimer.hidden = false;

        if (selectedPattern == 1) {
            generateSquaredPattern(numberOfRows);
        } else if (selectedPattern == 2) {
            generateTrianglePattern(numberOfRows);
        } else if (selectedPattern == 3) {
            generatedDaimondPattern(numberOfRows);
        }
    }
}

// Form Clearing Function
function clearAll() {
    display.innerHTML = "Print Another Pattern";
    document.getElementById("pattern-selector").value = 0;
    document.getElementById("number-1").value = null;
    document.getElementById("disclaimer").hidden = true;
}