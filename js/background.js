chrome.storage.sync.get(['savedDay'], function (result) {
    console.log(result.savedDay)
    savedDay2 = result.savedDay
    window.savedDay=savedDay2
    console.log(window.savedDay)

})



console.log(window.savedDay)

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.status == "changed") {
        sendResponse({success: "it works"})
        console.log("something")
    }
})
/*
function currentTime(setYear, setMonth, setDay, chosenDay) {
    dayMonthYear = new Date()
    yearNow = dayMonthYear.getYear()
    monthNow = dayMonthYear.getMonth()
    dayNow = dayMonthYear.getDay()
    if ((setYear == yearNow) && (setMonth == monthNow) && (setDay == dayNow)) {
        dayNow = chosenDay
    } else if (chosenDay != dayNow) {
        //add feature to change global variable from storage.sync to change chosenDay to the current day
        chrome.storage.sync.set( {savedDay: yearNow, monthNow, dayNow, dayNow})
    }
    secondMinuteHour = new Date()
    hourNow = secondMinuteHour.getHours()
    minutesNow = secondMinuteHour.getMinutes()
    secondsNow = secondMinuteHour.getSeconds()
    currentMinute = (hourNow * 60) + minutesNow
    var t = setTimeout(currentTime, 60000);
}*/