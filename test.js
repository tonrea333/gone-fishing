function whatTimeisit () {
    let date = newTime();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
}
function whatTimeisit() {
    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);
}

    function updateTime(k) {
        if (k < 10) {
            return "0" + k;
        }
        else {
            return k;
        }
    }
    function whatTimeisit() {
        let t = setTimeout(function(){whatTimeisit() }, 1000);
        }
        console.log(whatTimeisit());