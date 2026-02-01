const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionCard = document.getElementById('question-card');
const successCard = document.getElementById('success-card');

let yesScale = 1;
let noClicks = 0;

// Function to move the 'No' button and grow the 'Yes' button
function flee() {
    // 1. Grow the Yes button
    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;

    // 2. Move the No button to a random spot
    // We subtract button size so it doesn't go off-screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Event listeners for both desktop (mouseover) and mobile (touchstart)
noBtn.addEventListener('mouseover', flee);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicks on mobile
    flee();
});

// What happens when they finally click Yes
yesBtn.addEventListener('click', () => {
    questionCard.classList.add('hidden');
    successCard.classList.remove('hidden');
});
