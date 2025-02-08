function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById("noButton");

    // Generate random positions within the window bounds
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    // Add a playful wiggle effect
    button.classList.add("wiggle");
    setTimeout(() => button.classList.remove("wiggle"), 500);
}
