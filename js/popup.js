/* Set year, month */
var dayMonthYear = new Date()
var setDate = dayMonthYear.getDate()
var setDay = dayMonthYear.getDay()
var setMonth = dayMonthYear.getMonth()
var setYear = dayMonthYear.getYear()



/*
chrome.storage.sync.get(['savedDay'], function (result) {
    console.log(result.savedDay)
    console.log(result.savedDay[3])
    dayNow = result.savedDay[3]
    console.log(dayNow)

    document.getElementById('theDay')
    setToday(document.getElementById('theDay'))
    currentTime()
    
})
*/

chrome.runtime.sendMessage( {status: "opened"}, function(response) {
    console.log(response.openerInfo)
    if (response.openerInfo) {
        dayNow = response.openerInfo[3]
    } else {
        dayNow = setDay
    }
    console.log(dayNow)
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

var t

/*Time*/
function currentTime() {
    secondMinuteHour = new Date()
    hourNow = secondMinuteHour.getHours()
    minutesNow = secondMinuteHour.getMinutes()
    secondsNow = secondMinuteHour.getSeconds()
    currentMinute = (hourNow * 60) + minutesNow
    checkTimes()
    t = setTimeout(currentTime, 60000);
    console.log(hourNow, minutesNow, secondsNow)
}


function checkTimes(day) {
    console.log("checkTimes running")
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
    dayNow = parseInt($(this).val(), 10)
    console.log("changed")
    newInfo = [setYear, setMonth, setDate, dayNow]
    chrome.storage.sync.set( {savedDay: newInfo} , function () {
        console.log('storage is set to ' + newInfo)
    })
    clearTimeout(t)
    currentTime()
    chrome.runtime.sendMessage( {status: "changed"}, function(response) {
        console.log(response.backChanged)
    })

});