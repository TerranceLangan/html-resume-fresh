// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const title = section.querySelector('h2');
        if (title) {
            title.style.cursor = 'pointer';
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                if (content.style.display === 'none' || !content.style.display) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        }
    });
});
