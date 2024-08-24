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
const delayBetweenTexts = 1000; // Delay before starting to erase
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

//*--------------------------------------//
//*   END: Welcome background text       //
//*--------------------------------------//


//?--------------------------------------//
//? START: Tooltip follows the cursor    //
//?--------------------------------------//

document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu a');

    menuLinks.forEach(link => {
        const tooltip = link.querySelector('.tooltip');

        link.addEventListener('mousemove', (e) => {
            tooltip.style.left = e.pageX + 15 + 'px'; // Offset tooltip from cursor
            tooltip.style.top = e.pageY + 15 + 'px'; // Offset tooltip from cursor
        });

        link.addEventListener('mouseenter', () => {
            tooltip.style.opacity = 1;
        });

        link.addEventListener('mouseleave', () => {
            tooltip.style.opacity = 0;
        });
    });
});

//?--------------------------------------//
//?   END: Tooltip follows the cursor    //
//?--------------------------------------//