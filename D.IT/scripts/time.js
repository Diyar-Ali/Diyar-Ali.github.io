function show() {

    var d = new Date();

    var months = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var d = d;
    var yy = d.getFullYear(); //yyyy
    var mm = months[d.getMonth()]; //0-11
    var weekDay = days[d.getDay()]; //0-6
    var dd = d.getDate(); // 1-31

    var h = d.getHours(); // 0-23
    var m = d.getMinutes(); // 0-59
    var s = d.getSeconds(); // 0-59

    // if x = (false) do this else this;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + " : " + m + " : " + s;
    // document.getElementById("timeNow").innerHTML = time;
    document.getElementById("timeNow").innerHTML = "coming soon";

    var date = weekDay + " - " + dd + " - " + mm;
    document.getElementById("date").innerHTML = date;

    document.getElementById("year").innerHTML = yy; //yyyy

    setTimeout(show, 1000);

}
show();





// Set the date we're counting down to
var countDownDate = new Date("juli 17, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);