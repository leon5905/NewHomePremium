$.getScript("clock/clock-1.1.0.min.js");

var clock = $(".clock").clock({
    width: 300,       // set width
    height: 450,      // set height
    theme: 't2',      // set theme  => 't1' 't2' 't3'
    date: new Date()  // set date => new Date()
})
var clock = $("#clock").clock(),
data = clock.data();
// pause the clock
data.pause();
// start the clock
data.start();
// set a new date
data.setTime(new Date());

