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


const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".navlinks-container");
document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {
        e.stopPropagation();
        this.classList.toggle("active");
    });
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

dropdowns.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});