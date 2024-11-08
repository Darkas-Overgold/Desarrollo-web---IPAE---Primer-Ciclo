let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const pageNumber = document.querySelector('.page-number');

function showSlide(index) {
    slides.forEach((slide, i) => {
        console.log(slide);
        slide.classList.toggle('active-slide', i === index);
    });
    pageNumber.textContent = `${index + 1} / ${slides.length}`;
}
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    document.querySelector('.prev').addEventListener('click', () => {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', () => {
        console.log('test');
        changeSlide(1);
    });
});