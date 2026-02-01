const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionCard = document.getElementById('question-card');
const successCard = document.getElementById('success-card');

let yesScale = 1;
let noClicks = 0;


function flee() {

    yesScale += 0.5;
    yesBtn.style.transform = `scale(${yesScale})`;


    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}


noBtn.addEventListener('mouseover', flee);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicks on mobile
    flee();
});


yesBtn.addEventListener('click', () => {
    questionCard.classList.add('hidden');
    successCard.classList.remove('hidden');
});
