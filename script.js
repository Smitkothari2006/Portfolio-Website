// 🌙 Theme Toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});


// ✨ Typing Effect
const words = ["Capture.", "Build.", "Create."];
let i = 0, j = 0;
let current = "";
let deleting = false;

function type() {
    current = words[i];

    if (!deleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
    }

    if (j === current.length + 1) {
        deleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();


// 🎯 Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade").forEach(el => {
        let top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});