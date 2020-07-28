/* Set year, month */
var dayMonthYear = new Date()
var setDate = dayMonthYear.getDate()
var setMonth = dayMonthYear.getMonth()
var setYear = dayMonthYear.getYear()




chrome.storage.sync.get(['savedDay'], function (result) {
    console.log(result.savedDay)
    console.log(result.savedDay[3])
    dayNow = result.savedDay[3]
    console.log(dayNow)

    document.getElementById('theDay')
    setToday(document.getElementById('theDay'))
    currentTime()
    
})


/*Preselect today*/
function setToday(days) {
    for (var i = 0; i < days.options.length; i++) {
        if (days.options[i].value == dayNow) {
            days.options[i].selected = true
            return
        }
    }
}

/*Time*/
function currentTime() {
    secondMinuteHour = new Date()
    hourNow = secondMinuteHour.getHours()
    minutesNow = secondMinuteHour.getMinutes()
    secondsNow = secondMinuteHour.getSeconds()
    currentMinute = (hourNow * 60) + minutesNow
    checkTimes()
    var t = setTimeout(currentTime, 60000);
    console.log(hourNow, minutesNow, secondsNow)
}


function checkTimes(day) {
    console.log("its running")
    document.getElementById('sec').textContent = secondsNow
    chrome.storage.sync.get(['savedScheds'], function (result) {
        let chosenDay = result.savedScheds[dayNow]
        for (i = 0; i < chosenDay.length; ++i) {
            if ((currentMinute >= chosenDay[i].beginTimeMinutes) && (currentMinute <= chosenDay[i].endTimeMinutes)) {
                document.getElementById('className').textContent = chosenDay[i].name
                document.getElementById('minutesIn').textContent = currentMinute - chosenDay[i].beginTimeMinutes
                document.getElementById('minutesLeft').textContent = chosenDay[i].endTimeMinutes - currentMinute
            }
            else if ((currentMinute > chosenDay[i].endTimeMinutes) && (currentMinute < chosenDay[i+1].beginTimeMinutes)) {
                document.getElementById('className').textContent = "No Class Currently"
                document.getElementById('minutesIn').textContent = currentMinute - chosenDay[i].endTimeMinutes
                document.getElementById('minutesLeft').textContent = chosenDay[i+1].beginTimeMinutes - currentMinute
            }
        }
    })
    console.log(secondsNow)
}


$('#theDay').on('change',function () {
    dayNow = $(this).val()
    console.log("changed")
    console.log(dayNow)
    console.log([setYear, setMonth, setDate])

    chrome.storage.sync.set( {savedDay: [setYear, setMonth, setDate, parseInt(dayNow, 10)]} )
    checkTimes()
    chrome.runtime.sendMessage( {status: "changed"}, function(response) {
        console.log(response.success)
    })
});