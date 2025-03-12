document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

// Portfolio Modal
function openModal(imageSrc) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = "images/" + imageSrc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}