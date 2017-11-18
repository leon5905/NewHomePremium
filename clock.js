var clock={
    oriClock:function(){
        

        $.getScript("clock/clock-1.1.0.min.js");
        
        var clock = $(".clock").clock({
            width: 300,       // set width
            height: 450,      // set height
            theme: 't2',      // set theme  => 't1' 't2' 't3'
            date: new Date()  // set date => new Date()
        })
        var clock = $("#clock").clock()        
    },
    clock1:function(){
        var clock = new FlipClock($('.clock'), 100, {
            
                clockFace: 'TwentyFourHourClock'
            });
    }
}