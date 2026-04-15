/* テキストが下から表示されるような */
const slides = document.querySelectorAll('.slide'); 

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            slideObserver.unobserve(entry.target); 
        }
    });
}, {
    rootMargin: '0px 0px 0px 0px'
});

slides.forEach(slide => slideObserver.observe(slide));

/* 動画が表示されたらブラーフェードイン */
const targets = document.querySelectorAll(".blur-fade-in");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
            observer.unobserve(entry.target); 
        }
    });
}, {
    rootMargin: "0px 0px -10% 0px"
});

targets.forEach((target) => observer.observe(target));

/* Figmaの拡大縮小 */
document.querySelectorAll('.map-viewer').forEach(viewer => {
    const img = viewer.querySelector('.draggable-img');
    const btnIn = viewer.querySelector('.zoom-in');
    const btnOut = viewer.querySelector('.zoom-out');

    let scale = 1;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    function updateTransform() {
        img.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    // ＋ボタン
    btnIn.addEventListener('click', () => {
        scale = Math.min(scale + 1, 10); 
        updateTransform();
    });

    // －ボタン
    btnOut.addEventListener('click', () => {
        scale = Math.max(scale - 1, 1);
        if (scale === 1) {
            pointX = 0;
            pointY = 0;
        }
        updateTransform();
    });

    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isDragging = true;
        img.classList.add('dragging');
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        updateTransform();
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
        img.classList.remove('dragging');
    });
});