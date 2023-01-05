var start = document.getElementById('startbtn')
var edit = document.getElementById('editbtn')

var time = false;
var ended = false;
var minutes = 1;
var seconds = 10;
start.addEventListener('click', () =>{
    if (document.getElementById('startbtn').innerHTML == "Start"){
        start.innerHTML = "Stop";
    }else if (document.getElementById('startbtn').innerHTML == "Stop"){
        start.innerHTML = "Start";
    }
    time=true;
    ended=stopWatch();
});
edit.addEventListener('click', () =>{
    let newtime = prompt("Please enter your Time:", "15:00");
    document.getElementById("countdown").innerHTML = newtime;
});
function stopWatch() {
    if (document.getElementById('startbtn') == "Start"){
        return true;
    }
    if (time) {
        if (seconds == 0 & minutes > 0) {
            minutes--;
            seconds = 60;}
        if (seconds == 0 & minutes == 0) {
            time = false;
            var audio = new Audio('old-alarm-clock.mp3');
            audio.play();
            return true;
        }
        seconds--;}
    let secString = seconds;
    if (seconds < 10 & seconds > 0) {
        secString = "0" + secString;}
    document.getElementById("countdown").innerHTML = minutes + ":" + secString;
    //setInterval(stopWatch, 1000);
    setTimeout(stopWatch, 1000);
    //return true;
}