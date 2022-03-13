function getCurrentTime() {
    var time = new Date();
    var hour,
        minute = (time.getMinutes() < 10) ? "0" + time.getMinutes() : time.getMinutes(),
        second = (time.getSeconds() < 10) ? "0" + time.getSeconds() : time.getSeconds(),
        ampm = (time.getHours() >= 12) ? "PM" : "AM";

    // get hour am or pm
    if (time.getHours() == 0) {
        hour = 12;
    } else if (time.getHours() > 12) {
        hour = time.getHours() - 12;
    } else {
        hour = time.getHours();
    }

    var currentTime = hour + ":" + minute + ":" + second + "";
    document.getElementsByClassName("h-m-s")[0].innerHTML = currentTime;
    document.getElementsByClassName("am-pm")[0].innerHTML = ampm;

    var day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
        month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]

    document.getElementsByClassName("fecha")[0].innerHTML = month[time.getMonth()]
        + ", " + day[time.getDay()] + " " + time.getDate();;
}

getCurrentTime();
setInterval(function () {
    getCurrentTime()
}, 1000);