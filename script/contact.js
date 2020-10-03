let input = document.getElementById('name');

document.querySelector('.submit').addEventListener('click', () => {
    window.localStorage.setItem('name', input.value);
});

function load() {
    if (localStorage != null) {
        input.value = localStorage.getItem('name');
    }
}