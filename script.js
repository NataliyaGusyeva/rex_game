const dino = document.getElementById(dino);
const cactus = document.getElementById(cactus);
document.addEventListener("keydown", function(event) {
    jump()
});

function jump() {
    dino.classList.add("jump")
}