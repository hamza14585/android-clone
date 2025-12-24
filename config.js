const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();

        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });

        dropdown.classList.toggle('active');
    });
});

document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('active'));
});


