/* マウスカーソルを変更 */
(function() {
    const customCursor = document.querySelector('.custom-cursor');

    if (!customCursor) return;

    window.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });
})();

/* ハンバーガーメニューの開閉 */
const openButton = document.getElementById('open-button');
const nav = document.querySelector('nav');

if (openButton) {
    openButton.addEventListener('click', function() {
        openButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}