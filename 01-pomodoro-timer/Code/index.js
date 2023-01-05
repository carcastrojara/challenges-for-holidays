var start = document.getElementById('startbtn')
var time = false;
var minutes = 15;
var seconds = 0;
start.addEventListener('click', () =>{
    time=true;
    stopWatch();
});
function stopWatch() {
    if (time) {
        
        if (seconds == 0 & minutes > 0) {
            minutes--;
            seconds = 59;
        }
        if (seconds == 0 & minutes == 0) {
            time = false;
        }
        seconds--;
    }
    let secString = seconds;
    if (seconds < 10 & seconds > 0 ) {
        secString = "0" + secString;
    }
    document.getElementById("countdown").innerHTML = minutes + ":" + secString;
}