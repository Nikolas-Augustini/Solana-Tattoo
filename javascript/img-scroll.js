const container = document.getElementById('scrollImages');

const folder = container.dataset.folder;
const prefix = container.dataset.prefix;

const imageCount = 7;

const images = Array.from({ length: imageCount }, (_, i) => 
    `${folder}/${prefix}${i + 1}.png`
);

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

