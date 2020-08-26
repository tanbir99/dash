var t

function currentTime() {
    chrome.storage.sync.get(['savedDay'], function (result) {
        console.log(result.savedDay)
        savedDayInfo = result.savedDay
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            //receives message from popup.js when opened, replies back with which day to display
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
        //if a day has passed since the user manually chose "Today Is: ", it will reset to the current day
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
    //receives message from popup.js if user changes the day to be displayed
    if (request.status == "changed") {
        clearTimeout(t)
        currentTime()
        sendResponse({backChanged: true})
    }
})