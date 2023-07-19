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