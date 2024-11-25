document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".intro h1 span");
    const text = "Jayrald B. Bonucan";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeText, 150); // Adjust typing speed here
        }
    }

    // Clear initial content and start typing
    textElement.textContent = "";
    typeText();
});
