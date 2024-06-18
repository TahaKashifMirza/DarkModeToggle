document.querySelectorAll('input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        if (event.target.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});

document.querySelector('.color-change').addEventListener('click', (event) => {
    event.target.style.backgroundColor =
        event.target.style.backgroundColor === 'var(--button-color-dark)' ? 'var(--button-color-light)' : 'var(--button-color-dark)';
});