// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Countdown Timer
const weddingDate = new Date("Feb 1, 2026 08:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown-container").innerHTML = "<h3>The Wedding Has Started!</h3>";
    }
}, 1000);

// Copy to Clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin: " + text);
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });
}

// Music Control (Placeholder logic)
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;
// const audio = new Audio('path/to/song.mp3'); // Uncomment and add path

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        // audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i>';
        musicBtn.style.animation = 'none';
    } else {
        // audio.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        musicBtn.style.animation = 'pulse 2s infinite';
    }
    isPlaying = !isPlaying;
});

// Lock Scroll until Open Invitation
const body = document.body;
const hero = document.getElementById('hero');
const openBtn = document.querySelector('.btn-open');

// Initially lock scroll
body.style.overflow = 'hidden';
body.style.height = '100vh';

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    body.style.overflow = 'auto';
    body.style.height = 'auto';
    
    // Smooth scroll to next section
    document.getElementById('mempelai').scrollIntoView({ 
        behavior: 'smooth' 
    });

    // Auto play music on open (optional, browser policy might block)
    if (!isPlaying) {
        // audio.play();
        musicBtn.click();
    }
});
