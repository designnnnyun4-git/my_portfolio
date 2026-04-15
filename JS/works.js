/*フッター到達時にすべての水彩円を非表示にする*/
const footer = document.querySelector('footer');
const fixedBg = document.querySelector('.fixed-bg'); 

if (footer && fixedBg) {
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fixedBg.classList.add('is-hidden');
            } else {
                fixedBg.classList.remove('is-hidden');
            }
        });
    }, {
        threshold: 0.5 
    });

    footerObserver.observe(footer);
}

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

/* aタグ見えたら画像表示 */
const workItems = document.querySelectorAll('.work-item'); 
const workObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            workObserver.unobserve(entry.target); 
        }
    });
}, {
    rootMargin: '0px 0px -40% 0px'
});

workItems.forEach(item => workObserver.observe(item));