const container = document.getElementById('scrollImages');

const images = [
    'images/tattoos/tat1.png',
    'images/tattoos/tat2.png',
    'images/tattoos/tat3.png',
    'images/tattoos/tat4.png',
    'images/tattoos/tat5.png',
    'images/tattoos/tat6.png',
    'images/tattoos/tat7.png'
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
});

let scrollSpeed = 1;

function autoScroll() {
    container.scrollLeft += scrollSpeed;

    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();
