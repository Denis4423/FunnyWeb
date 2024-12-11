let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score"), 10) : 0;
document.getElementById("score").textContent = score;
document.getElementById("button").onclick = function () {
    const textContainer = document.getElementById('score');
    score += 1;
    textContainer.textContent = score;
    localStorage.setItem('score', score);
    if (score % 100 === 0) {
        const jsConfetti = new JSConfetti();

        jsConfetti.addConfetti({
            emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'],
            confettiRadius: 15,
            emojiSize: 100,
            confettiNumber: 500,
        });


        const audio = new Audio();
        audio.src = "./sound.mp3"
        audio.play();
        showModal();
    }
}
document.getElementById("button-r").onclick = function () {
    const textContainer = document.getElementById('score');
    score -= 1;
    textContainer.textContent = score;
    localStorage.setItem('score', score);
    if (score % 100 === 0) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤍'],
            confettiRadius: 15,
        });
        const audio = new Audio();
        const audioReserve = new Audio();
        audio.src = "./sound.mp3"
        audio.play();
        showModal();
    }
}

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];


// Отображение модального окна
function showModal() {
    modal.style.display = "block";
    modalImg.src = "love.png"; // Здесь ваш путь к изображению
    captionText.innerHTML = "I LOVE YOU";
}

// Закрытие модального окна
closeBtn.onclick = function () {
    modal.style.display = "none";
};



