let blure = document.querySelector(".blure")
const modal = document.getElementById("error");

function addModal() {
    blure.style.display = 'block';
    setTimeout(() => {
        blure.style.opacity = '50%';
    }, 1);
    modal.classList.add('active'); 
    document.querySelector('html').style.overflowY = "hidden";
}

function closeModal() {
    blure.style.opacity = '0%';
    setTimeout(() => {
        blure.style.display = 'none';
    }, 100);
    modal.classList.remove('active'); 
    document.querySelector('html').style.overflowY = "scroll";
}
let entry = document.querySelector('.header__entry');
entry.addEventListener('click', function() {
    var audio = new Audio('../audio/1.mp3');
    audio.play();
})