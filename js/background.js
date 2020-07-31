var t

function currentTime() {
    chrome.storage.sync.get(['savedDay'], function (result) {
        console.log(result.savedDay)
        savedDayInfo = result.savedDay
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request.status == "opened") {
                console.log("opened")
                sendResponse({openerInfo: savedDayInfo})
            }
        })
        dayMonthYear = new Date()
        yearNow = dayMonthYear.getYear()
        monthNow = dayMonthYear.getMonth()
        dayNow = dayMonthYear.getDay()
        dateNow = dayMonthYear.getDate()
        setInfo = result.savedDay
        if ((setInfo[0] != yearNow) || (setInfo[1] != monthNow) || (setInfo[2] != dateNow)) {
            chrome.storage.sync.set( {savedDay: [yearNow, monthNow, dateNow, dayNow]})
        } else if (setInfo[3] != dayNow) {
            dayNow = setInfo[3]
        }
        secondMinuteHour = new Date()
        hourNow = secondMinuteHour.getHours()
        minutesNow = secondMinuteHour.getMinutes()
        secondsNow = secondMinuteHour.getSeconds()
        currentMinute = (hourNow * 60) + minutesNow
    })
    t = setTimeout(currentTime, 60000)
}

currentTime()


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.status == "changed") {
        clearTimeout(t)
        currentTime()
        sendResponse({backChanged: true})
    }
})