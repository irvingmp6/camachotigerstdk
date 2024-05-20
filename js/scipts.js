// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');

    document.getElementById('lang-en').addEventListener('click', function () {
        enElements.forEach(el => el.style.display = 'block');
        esElements.forEach(el => el.style.display = 'none');
    });

    document.getElementById('lang-es').addEventListener('click', function () {
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = 'block');
    });

    // Default language
    enElements.forEach(el => el.style.display = 'block');
    esElements.forEach(el => el.style.display = 'none');
});
