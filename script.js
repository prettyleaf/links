const texts = [
    "Welcome!",
    "How's your day going?",
    "Explore the Features",
    "Powered by Dominant",
    "Stay Connected"
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 125; // Speed of typing
const erasingSpeed = 100; // Speed of erasing (if needed)
const delayBetweenTexts = 1500; // Delay before starting to type the next text

function type() {
    const backgroundTextElement = document.getElementById('backgroundText');
    const currentText = texts[textIndex];

    // Append the next character to the displayed text
    backgroundTextElement.textContent = currentText.slice(0, charIndex);

    charIndex++;

    if (charIndex <= currentText.length) {
      setTimeout(type, typingSpeed); // Continue typing
    } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, delayBetweenTexts); // Move to next text after delay
    }
}

// Start the typing animation when the page loads
window.onload = type;
