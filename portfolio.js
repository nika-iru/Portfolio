function homeClick() {
    globalThis.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

function aboutClick() {
    globalThis.scrollTo({
        top: getScrollPosition('about'),
        left: 0,
        behavior: "smooth"
    });
}

function expClick() {
    globalThis.scrollTo({
        top: getScrollPosition('exp'),
        left: 0,
        behavior: "smooth"
    });
}

function projClick() {
    globalThis.scrollTo({
        top: getScrollPosition('proj'),
        left: 0,
        behavior: "smooth"
    });
}

function getScrollPosition(section) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    switch (section) {
        case 'about':
            return height; // Adjust for 'about' section
        case 'exp':
            return height * 1.8; // Adjust for 'exp' section
        case 'proj':
            return height * 2.7; // Adjust for 'proj' section
        default:
            return 0;
    }
}

function updateBackgroundColor() {
    const scrollY = window.scrollY || window.pageYOffset;
    const height = window.innerHeight;

    const aboutScrollPosition = height;
    const expScrollPosition = height * 1.8;
    const projScrollPosition = height * 2.7;

    // Update 'about-block'
    if (scrollY >= aboutScrollPosition && scrollY < expScrollPosition) {
        const element = document.getElementById("about-block");
        const about = document.getElementById("about-label");
        element.style.backgroundColor = 'rgba(131, 140, 170, 0.07)';
        about.style.marginRight = '30%';
        about.style.marginLeft = '30%';
    } else {
        const element = document.getElementById("about-block");
        const about = document.getElementById("about-label");
        element.style.backgroundColor = 'transparent';
        about.style.marginRight = '42%';
        about.style.marginLeft = '42%';
    }

    // Update 'exp-block'
    if (scrollY >= expScrollPosition && scrollY < projScrollPosition) {
        const element = document.getElementById("exp-block");
        element.style.left = '0%';
    } else {
        const element = document.getElementById("exp-block");
        element.style.left = '67%';
    }

    // Update 'proj-block'
    if (scrollY >= projScrollPosition) {
        const element = document.getElementById("proj-block");
        const label = document.getElementById("proj-label");
        element.style.backgroundColor = 'rgba(0,0,0,0.7)';
        label.style.marginRight = '30%';
        label.style.marginLeft = '30%';
    } else {
        const element = document.getElementById("proj-block");
        const label = document.getElementById("proj-label");
        element.style.backgroundColor = 'transparent';
        label.style.marginRight = '42%';
        label.style.marginLeft = '42%';
    }
}

// Add an event listener to call the function on scroll
window.addEventListener('scroll', updateBackgroundColor);