
let darkMode = document.getElementById('darkMode');
let sameColor = document.getElementsByClassName('sameColor');
let body = document.querySelector('body');


darkMode.addEventListener('click', function(){
    body.classList.toggle('night')
})


