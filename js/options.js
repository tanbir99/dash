/*form_text for inserting HTML form, arrays for storing user inputs per day*/
var formText = '<div class="new_form"> <br><form> <label for="a">Class:</label><br> <input class="info" type="text" id="section_name" name="a"><br> <label for="begin">Start time:</label><br> <select class="info" name="begin" id="begin_hour"> <option value="12">12</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> </select> <select class="info" name="begin" id="begin_minutes"> <option value="00">00</option> <option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="35">35</option> <option value="36">36</option> <option value="37">37</option> <option value="38">38</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="42">42</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="50">50</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="59">59</option> </select> <select class="info" name="begin" id="begin_am_pm"> <option value="AM">AM</option> <option value="PM">PM</option> </select> <br> <label for="end">End time:</label><br> <select class="info" name="end" id="end_hour"> <option value="12">12</option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> </select> <select class="info" name="end" id="end_minutes"> <option value="00">00</option> <option value="01">01</option> <option value="02">02</option> <option value="03">03</option> <option value="04">04</option> <option value="05">05</option> <option value="06">06</option> <option value="07">07</option> <option value="08">08</option> <option value="09">09</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> <option value="31">31</option> <option value="32">32</option> <option value="33">33</option> <option value="34">34</option> <option value="35">35</option> <option value="36">36</option> <option value="37">37</option> <option value="38">38</option> <option value="39">39</option> <option value="40">40</option> <option value="41">41</option> <option value="42">42</option> <option value="43">43</option> <option value="44">44</option> <option value="45">45</option> <option value="46">46</option> <option value="47">47</option> <option value="48">48</option> <option value="49">49</option> <option value="50">50</option> <option value="51">51</option> <option value="52">52</option> <option value="53">53</option> <option value="54">54</option> <option value="55">55</option> <option value="56">56</option> <option value="57">57</option> <option value="58">58</option> <option value="59">59</option> </select> <select class="info" name="end" id="end_am_pm"> <option value="AM">AM</option> <option value="PM">PM</option></select></form><button class="remove_section">Remove Class</button></div> '


$(document).ready(function() {
    addSections()
    removeSections()
    restoreOptions()
    chrome.storage.sync.get(['savedScheds'], function(result) {
        console.log(result.savedScheds[0])
    })
})


/*Add and Remove Class Buttons*/
/*Add*/
function addSections() {
    $("#sunday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#sunday");
    })
    $("#monday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#monday");
    })
    $("#tuesday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#tuesday");
    })
    $("#wednesday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#wednesday");
    })
    $("#thursday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#thursday");
    })
    $("#friday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#friday");
    })
    $("#saturday_add_section").click(function(e){
        e.preventDefault();
        $(formText).appendTo("#saturday");
    })
}
/*Remove*/
function removeSections() {
    $(".day").on("click", ".remove_section", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
    })
}


/*Save Button, Store Inputs as Arrays*/
function saveSettings() {
    var all_scheds = []
    document.querySelectorAll(".day").forEach(day => {
        let daily_sched = []
        day.querySelectorAll(".new_form").forEach(section => {
            let obj = {}
            section.querySelectorAll(".info").forEach(ele => {
                obj[ele.id] = ele.value
            })
            daily_sched.push(obj)
        })
        all_scheds.push(daily_sched)
    })
    chrome.storage.sync.set({savedScheds: all_scheds})
    console.log(all_scheds)
}

document.getElementById('save').addEventListener('click', saveSettings);


/*Brings Back Original Settings Upon Refresh*/
function restoreOptions() {
    var days = ["#sunday", "#monday", "#tuesday", "#wednesday", "#thursday", "#friday", "#saturday"]
    var x = 0
    chrome.storage.sync.get(['savedScheds'], function(result) {
        result.savedScheds.forEach(selectedDay => {
            timesAppended = 0
            while (timesAppended != selectedDay.length) {
               $(formText).appendTo(days[x])
               console.log(document.querySelectorAll(days[x] + ' form')[timesAppended].querySelector("#begin_hour"))
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

function restoreOptions2() {
    var place = 0
    
}


/*==============================================*/
/*Test button*/
function tester () {
    console.log(document.querySelectorAll("form"))
    console.log(document.getElementsByClassName("sunday"))
    chrome.storage.sync.get(['savedScheds'], function(d) {
        console.log(d.savedScheds[0][0].begin_am_pm)
    })
    console.log(document.querySelectorAll('#sunday form')[0]['begin_hour'])
    console.log(document.querySelectorAll('.new_form'))
    x = 0
    


}

document.getElementById('test').addEventListener('click', tester);