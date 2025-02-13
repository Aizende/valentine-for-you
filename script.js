document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    let music1 = document.getElementById("music1");
    let music2 = document.getElementById("music2");
    let isPlaying = false;
    let musicButton = document.getElementById("play-music");

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    showSlide(currentSlide);
    setInterval(nextSlide, 10000); // Change slides every 10 seconds

    musicButton.addEventListener("click", function () {
        if (!isPlaying) {
            music1.play();
            musicButton.textContent = "⏸ Pause Music";
            isPlaying = true;
        } else {
            music1.pause();
            music2.pause();
            musicButton.textContent = "🎶 Play Romantic Music 🎶";
            isPlaying = false;
        }
    });

    // When the first music ends, start the second one
    music1.addEventListener("ended", function () {
        music2.play();
    });

    // When the second music ends, restart the first one
    music2.addEventListener("ended", function () {
        music1.play();
    });
});
