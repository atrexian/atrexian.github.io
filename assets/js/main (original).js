const phrases = [
    "System Admin",
    "Linux Správce",
    "Vývojář",
    "Webdeveloper",
    "Grafik",
    "Tester",
];

const typingSpeed = 50;
const erasingSpeed = 50;
const delayBetweenPhrases = 1000;

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
        if (letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    } else {
        typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;
        if (letterIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenPhrases);
            return;
        }
    }
    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenPhrases);
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const uvod = document.getElementById("uvod");

    loader.style.display = "none";

    uvod.style.display = "block";
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
    this.classList.toggle("menu-open");
    document.querySelector(".menu").classList.toggle("open");
});

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("href").substring(1);
        document.querySelectorAll(".content").forEach((content) => {
            if (content.id === targetId) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

document.querySelectorAll(".navodlink").forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("href").substring(1);
        document.querySelectorAll(".content").forEach((content) => {
            if (content.id === targetId) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".scroll-link");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            history.pushState(null, "", link.getAttribute("href"));
        });
    });
});

function searchNavod() {
    const input = document.getElementById("search").value.toLowerCase();
    const navody = document.querySelectorAll(".navody .navodlink");

    navody.forEach((navod) => {
        const text = navod.innerText.toLowerCase();
        if (text.includes(input)) {
            navod.style.display = "";
        } else {
            navod.style.display = "none";
        }
    });
}

(function() {
    if (window.location.hostname !== 'ondrejsmehlik.cz') {
      document.body.innerHTML = "";
      alert("Odcizení stylu a obsahu webové stránky je v České Republice kyber-zločin. Nepáchejte trestnou činnost a radši si webové stránky naprogramujte podle sebe :)");
      window.stop();
    }
})();