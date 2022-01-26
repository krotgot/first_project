// homework

let user = navigator.userAgent

let divUser = document.getElementById('user')

divUser.append(user)


function getTime() {
    let time = document.getElementById('time');
    time.innerHTML = new Date();
}
setInterval(getTime,
    1000);


function colorize(){
    let clr = '#' + Math.floor(Math.random()*16777215).toString(16)
    time.style.background = clr
    divUser.style.background = clr
}

setInterval(colorize,
    1000);


