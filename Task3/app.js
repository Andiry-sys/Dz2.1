let _time = { hour: 20, minutes: 30, second: 10 }

function PrintTime(time) {
    for (const key in time) {
        if (Object.hasOwnProperty.call(time, key)) {
            const element = time[key];
            console.log(element);

        }
    }

}

function SetSecond(time, seconds) {
    let min = 0
    if (seconds % 60 == 0) {
        min++
        time.minutes += min
    }
    else if (seconds < 60) {
        time.second += seconds
    }

}

function SetMinutes(time, minutes) {
    let hou = 0
    if (minutes % 60 == 0) {
        hou++
        time.hour += hou
    }
    else if (minutes < 60) {
        time.minutes += minutes
    }
}

function SetHours(time, hour) {
    let h = 0
    if (hour % 24 == 0) {
        h++
        time.hour += h
    }
    else if (hour < 24) {
        time.hour += hour
    }



}

PrintTime(_time)
SetSecond(_time, 60)
PrintTime(_time)
SetMinutes(_time, 60)
PrintTime(_time)
SetHours(_time, 20)
PrintTime(_time)


