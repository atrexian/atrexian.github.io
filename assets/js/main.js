window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
    	nav.classList.add("scrolled");
    } else {
    	nav.classList.remove("scrolled");
    }
});

function toggleMenu() {
	const menu = document.getElementById('menu');
	menu.classList.toggle('active');
}

window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('.stars').classList.add('visible');
	}, 1);
});

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		setTimeout(() => {
			const menu = document.getElementById('menu');
			if (menu.classList.contains('active')) {
				menu.classList.remove('active');
			}
		}, 300);
	});
});


const sections = Array.from(menuLinks).map(link => document.querySelector(link.getAttribute('href')));

function activateMenu() {
    const scrollPos = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    let activeIndex = -1;

    for (let i = 0; i < sections.length - 1; i++) {
    	const section = sections[i];
    	if (section.offsetTop <= scrollPos + 100 && (section.offsetTop + section.offsetHeight) > scrollPos + 100) {
    		activeIndex = i;
    		break;
    	}
    }

    const lastSection = sections[sections.length - 1];
    if (scrollPos + windowHeight >= docHeight - 50) {
    	activeIndex = sections.length - 1;
    }

    menuLinks.forEach(link => link.classList.remove('active'));
    if (activeIndex !== -1) {
    	menuLinks[activeIndex].classList.add('active');
    }
}

window.addEventListener('scroll', activateMenu);
window.addEventListener('load', activateMenu);