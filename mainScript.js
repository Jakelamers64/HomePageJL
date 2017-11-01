//clock

var myTimer;

window.onload = function () {
    myTimer = setInterval(clockTime, 1000);
};

function clockTime () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ap = "AM"
    if (hours >12) {
        ap = "PM"
        hours -= 12;
    }
    
    if (hours <10) {
        hours = "0" + hours;
    }
    if (minutes <10) {
        minutes = "0" + minutes;
    }
    if (seconds <10) {
        seconds = "0" + seconds;
    }
    
    var formattedTime = hours + ":" + minutes + ":" + seconds + " " + ap;
    
    document.getElementById('clock').innerHTML = formattedTime;
    
}





