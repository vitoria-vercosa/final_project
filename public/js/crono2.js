var timersCount = 0;
var pause = false; //is timer paused

countTimers();

function countTimers() {
    timersCount++;

    var count = 26;
    var counter = setInterval(timer, 1000);

    function timer() {
        if (!pause) { //do something if not paused
            count = count - 1;
            if (count < 0) {
                clearInterval(counter);
                setTimeout(countTimers, 5000); //start count from 26 again
                return;
            }

            document.getElementById("timer").innerHTML = count;
        }
    }

    document.getElementById("countTimers").innerHTML = timersCount;
}

document.getElementById("pause").addEventListener("click", function () { pause = true; });

document.getElementById("resume").addEventListener("click", function () { pause = false; });