const display = document.querySelector('#display');

setInterval(function(){
    let date = new Date();
    display.innerHTML = date.toLocaleString();
}, 1000);
