/*formText for inserting new HTML forms*/
var formText = '<div class="new_form"> <br><form> <label for="a">Class:</label><br> <input class="info" type="text" id="section_name" name="a"><br> <label for="begin">Start time:</label><br> <select class="info" name="begin" id="begin_hour"> <option value="12">12</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> </select> <select class="info" name="begin" id="begin_minutes"> <option value="00">00</option> <option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="35">35</option> <option value="36">36</option> <option value="37">37</option> <option value="38">38</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="42">42</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="50">50</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="59">59</option> </select> <select class="info" name="begin" id="begin_am_pm"> <option value="AM">AM</option> <option value="PM">PM</option> </select> <br> <label for="end">End time:</label><br> <select class="info" name="end" id="end_hour"> <option value="12">12</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> </select> <select class="info" name="end" id="end_minutes"> <option value="00">00</option> <option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="35">35</option> <option value="36">36</option> <option value="37">37</option> <option value="38">38</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="42">42</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="50">50</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="59">59</option> </select> <select class="info" name="end" id="end_am_pm"> <option value="AM">AM</option> <option value="PM">PM</option></select></form><button class="remove_section">Remove Class</button></div> '


$(document).ready(function () {
    restoreOptions()
    addSections()
    removeSections()
    chrome.storage.sync.get(['restoreScheds'], function (result) {
        console.log(result.restoreScheds)
    })
})


/*Brings Back Original Settings Upon Refresh*/
function restoreOptions() {
    var days = ["#sunday", "#monday", "#tuesday", "#wednesday", "#thursday", "#friday", "#saturday"]
    var x = 0
    chrome.storage.sync.get(['restoreScheds'], function (result) {
        result.restoreScheds.forEach(selectedDay => {
            timesAppended = 0
            while (timesAppended != selectedDay.length) {
                $(formText).appendTo(days[x])
                /*var selects the form that was just created, other lines add information*/
                var selectedSection = document.querySelectorAll(days[x] + ' form')[timesAppended]
                selectedSection.querySelector("#section_name").value = selectedDay[timesAppended].section_name
                selectedSection.querySelector("#begin_hour").value = selectedDay[timesAppended].begin_hour
                selectedSection.querySelector("#begin_minutes").value = selectedDay[timesAppended].begin_minutes
                selectedSection.querySelector("#begin_am_pm").value = selectedDay[timesAppended].begin_am_pm
                selectedSection.querySelector("#end_hour").value = selectedDay[timesAppended].end_hour
                selectedSection.querySelector("#end_minutes").value = selectedDay[timesAppended].end_minutes
                selectedSection.querySelector("#end_am_pm").value = selectedDay[timesAppended].end_am_pm
                timesAppended++
            }
            x++
        })
    });

}


/*Add and Remove Class Buttons*/
function addSections() {
    /*Add Buttons*/
    $("#sunday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#sunday");
    })
    $("#monday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#monday");
    })
    $("#tuesday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#tuesday");
    })
    $("#wednesday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#wednesday");
    })
    $("#thursday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#thursday");
    })
    $("#friday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#friday");
    })
    $("#saturday_add_section").click(function (e) {
        e.preventDefault();
        $(formText).appendTo("#saturday");
    })
}

function removeSections() {
    /*Remove Buttons*/
    $(".day").on("click", ".remove_section", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
    })
}


/*Save Button, Store Inputs as Arrays*/
function saveSettings() {
    infoGetter()
    minuteConverter(allScheds)
    chrome.storage.sync.set({ restoreScheds: allScheds }) //saves times in original form, for restoreOptions()
    chrome.storage.sync.set({ savedScheds: minuteSched }) //saves times in minutes, for checkTimes() in popup.js
}

document.getElementById('save').addEventListener('click', saveSettings);

function infoGetter() {
    /*Retrieves info from all forms and save into array allScheds*/
    allScheds = []
    document.querySelectorAll(".day").forEach(day => {
        let dailySched = []
        day.querySelectorAll(".new_form").forEach(section => {
            let obj = {}
            section.querySelectorAll(".info").forEach(ele => {
                obj[ele.id] = ele.value
            })
            dailySched.push(obj)
        })
        allScheds.push(dailySched)
    })
    console.log(allScheds)
}

function minuteConverter(originalSched) {
    /*Convert allScheds to 24-hour format*/
    minuteSched = []
    originalSched.forEach(day => {
        let newDailySched = []
        day.forEach(section => {
            let obj = {}
            obj["name"] = section.section_name
            if (section.begin_am_pm == 'AM') {
                if (section.begin_hour == 12) {
                    obj["beginTimeMinutes"] = parseInt(section.begin_minutes)
                } else {
                    obj["beginTimeMinutes"] = (parseInt(section.begin_hour) * 60) + parseInt(section.begin_minutes)
                }
            } else {
                if (section.begin_hour == 12) {
                    obj["beginTimeMinutes"] = 720 + parseInt(section.begin_minutes)
                } else {
                    obj["beginTimeMinutes"] = ((12 + parseInt(section.begin_hour)) * 60) + parseInt(section.begin_minutes)
                }
            }
            if (section.end_am_pm == 'AM') {
                if (section.end_hour == 12) {
                    obj["endTimeMinutes"] = parseInt(section.end_minutes)
                } else {
                    obj["endTimeMinutes"] = (parseInt(section.end_hour) * 60) + parseInt(section.end_minutes)
                }
            } else {
                if (section.end_hour == 12) {
                    obj["endTimeMinutes"] = 720 + parseInt(section.end_minutes)
                } else {
                    obj["endTimeMinutes"] = ((12 + parseInt(section.end_hour)) * 60) + parseInt(section.end_minutes)
                }
            }
            newDailySched.push(obj)
        })
        beforeAfterClass(newDailySched)
        minuteSched.push(newDailySched)
    })
    console.log(minuteSched)
}


function beforeAfterClass (daysClasses) {
    /*Called in minuteConverter() to add time slots before and after class in each array*/
    if (daysClasses.length == 0) {
        let noClass = {}
        noClass["name"] = "No Class Today!"
        noClass["beginTimeMinutes"] = 0000
        noClass["endTimeMinutes"] = 1439
        daysClasses.push(noClass)
    } else {
        let beforeClass = {}
        beforeClass["name"] = "No Class Yet!"
        beforeClass["beginTimeMinutes"] = 0000
        beforeClass["endTimeMinutes"] = daysClasses[0].beginTimeMinutes - 1
        daysClasses.unshift(beforeClass)
        let afterClass = {}
        afterClass["name"] = "Done For Today!"
        afterClass["beginTimeMinutes"] = daysClasses[daysClasses.length - 1].endTimeMinutes + 1
        afterClass["endTimeMinutes"] = 1439
        daysClasses.push(afterClass)
    }
}