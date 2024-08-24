//--------------------------------------//
//    START: Welcome background text    //
//--------------------------------------//
const texts = [
    "Welcome!",
    "How's your day going?",
    "Explore the Features",
    "Powered by Dominant",
    "Stay Connected",
    "github.com/TeamDominant"
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing
const erasingSpeed = 50; // Speed of erasing
const delayBetweenTexts = 5000; // Delay before starting to erase
const delayBeforeTypingNext = 250; // Delay before starting to type next text

function type() {
    const backgroundTextElement = document.getElementById('backgroundText');
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
        // Typing the text
        backgroundTextElement.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        // Pause after the text is fully written
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    const backgroundTextElement = document.getElementById('backgroundText');
    const currentText = texts[textIndex];

    if (charIndex > 0) {
        // Erasing the text
        backgroundTextElement.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        // Move to the next text after erasing
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, delayBeforeTypingNext);
    }
}

// Start the typing animation when the page loads
window.onload = type;

//--------------------------------------//
//    START: Icon and Tooltip Animation //
//--------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.menu a');
    const totalIcons = icons.length;
    let iconsLoaded = 0;

    // Initially center all icons
    icons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('fade-in');
            iconsLoaded++;

            // Once all icons have faded in, move them left and show tooltips
            if (iconsLoaded === totalIcons) {
                // Move icons left after fade-in is complete
                icons.forEach((icon) => {
                    icon.classList.add('move-left');
                });

                // After moving icons, show tooltips
                setTimeout(() => {
                    const tooltips = document.querySelectorAll('.tooltip');
                    tooltips.forEach((tooltip) => {
                        tooltip.classList.add('fade-in');
                    });
                }, 500); // Delay to allow the move-left animation to complete
            }
        }, index * 150); // Stagger the fade-in effect for each icon
    });
});
