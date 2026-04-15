/* テキストが下から表示されるような */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.section'); 

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

        const targets = entry.target.querySelectorAll('.slide');

        targets.forEach((el, index) => {
            setTimeout(() => {
            el.classList.add('show');
          }, index * 200);
        });

        observer.unobserve(entry.target); 
        }
    });
    }, {
    threshold: 0.2
    });

    sections.forEach(section => observer.observe(section));
});

/* Worksセクションの要素下の水彩円が要素ごとに変えるように */
document.addEventListener('DOMContentLoaded', () => {
    const blob = document.querySelector('.cursor-blob');
    const menu = document.querySelector('.works_menu'); 
    const targets = document.querySelectorAll('.item');

    if (!blob || !menu) {
        console.error('Error: Required elements (.cursor-blob or .works_menu) not found.');
        return;
    }

    document.addEventListener('mousemove', (e) => {
        blob.style.left = `${e.clientX}px`;
        blob.style.top = `${e.clientY}px`;
    });

    menu.addEventListener('mouseenter', () => {
        blob.classList.add('is-active');
    });

    menu.addEventListener('mouseleave', () => {
        blob.classList.remove('is-active');
    });

    targets.forEach(target => {
        target.addEventListener('mouseenter', () => {
        const color = target.getAttribute('data-color');

        if (color) {
        blob.style.setProperty('--blob-color', color);
        }
    });
    });
});