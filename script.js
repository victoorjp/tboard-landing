document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.getElementById("theme__toggle");
    const icon = document.getElementById("theme__icon");
    const logo = document.getElementById("logo");

    if (button && icon) {
        button.addEventListener("click", () => {
            const isDark = body.getAttribute("data-theme") === "dark";
            body.setAttribute("data-theme", isDark ? "light" : "dark");
            icon.src = isDark ? "./img/darktheme.svg" : "./img/lighttheme.svg";
            logo.src = isDark ? "./img/logoblack.png" : "./img/logowhite.png";
        });
    }

});