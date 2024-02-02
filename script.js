
function redirectToHome() {
    document.body.classList.add('zoom-in');
    window.location.href = 'index.html';
}

function redirectToClothingPage() {
    document.body.classList.add('zoom-in');
    window.location.href = 'clothing.html';
}

function redirectToDistributor() {
    document.body.classList.add('zoom-in');
    window.location.href = 'distributor.html';
}

function redirectToContact() {
    document.body.classList.add('zoom-in');
    window.location.href = 'contact.html';
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.typing').forEach((element) => {
        element.innerHTML = [...element.textContent]
            .map((char, i) => `<span style="animation: typing 5s steps(40) forwards ${i * 0.1}s">${char}</span>`)
            .join('');
    });
});

