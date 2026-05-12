const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

// Function to move the No button to a random spot
noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// Switch to success view
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
