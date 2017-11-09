$(document).ready(function(){
    $('.submit').keydown(function(event){
        if(event.keyCode == 13){
            this.form.submit();
            return false;
        }
    });
});

var cood ;
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    cood = position.coords.latitude + "," + position.coords.longitude;
    $(document).ready(function loadData() {
        var weatherAPIXU = "http://api.apixu.com/v1/current.json?key=b4d27ec0fda9448ca7792516170111&q="+ cood;
        alert(cood);
        $.getJSON(weatherAPIXU, function(data) {
            var forecast = data.current.condition.icon;
            var weather = $(".weather");
            weather.append(forecast);
        }).error(function(e) {
            $(".weather").append('Sorry! Not Loaded');
        });
        $('.weather').submit(loadData);
    });
}


window.onload = getLocation;


