//用于成长进行曲序章的文本逐渐显示效果
document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.fade-in-text');
    const text1 = document.querySelector('.fade-in-text1');
    const text2 = document.querySelector('.fade-in-text2');
    const text3 = document.querySelector('.fade-in-text3');
    const text4 = document.querySelector('.fade-in-text4');
    const text5 = document.querySelector('.fade-in-text5');
     //使文本逐渐显示
    setTimeout(() => {
       text.classList.add('show');
    }, 1000); // 500毫秒后开始渐显效果
    setTimeout(() => {
        text1.classList.add('show');
    }, 3000);
    setTimeout(() => {
        text2.classList.add('show');
    }, 5000);
    setTimeout(() => {
        text3.classList.add('show');
    }, 8000);
    setTimeout(() => {
        text4.classList.add('show');
    }, 10000);
    setTimeout(() => {
        text5.classList.add('show');
    }, 12000);
});