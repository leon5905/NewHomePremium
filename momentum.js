$(document).ready(function(){
    clockHelper.loadClockFromStorage();

    $('.submit').keydown(function(event){
        if(event.keyCode == 13){
            this.form.submit();
            return false;
        }
    });

    var setting = document.getElementById("setting");
    var popup = $('.pop_bg');
    var pop = $('.popup_tab');
    var content =$('.ctn');
    var filterVal = "blur(5px)";
    setting.addEventListener('click', function(){              
        popup.css('display','block');
        pop.css('display', 'flex');
        content.css('filter', filterVal);
    });
    
    pop.click(function(){
        popup.css('display','none'); 
        pop.css('display', 'none');
        content.css('filter', 'none');       
    });
    
    var container = $('.popup_tab_container');
    var clockSetting = settingHelper.generateToolPageEntry('','Clock Setting','Customise Clock','blue');
    clockSetting.click(function(){
        
    });

    container.append(clockSetting);
});

var clockHelper={
    loadClockFromStorage:function(){
        // browser.storage.local.get();

        var clockVariable =2;
        switch(clockVariable){
            case 1:
            clock.oriClock();
            $('.clock').css('margin','0 600px');
            $('.clock').css('padding-top','0');
            break;
            case 2:
            clock.clock1();
            $('.clock').css('margin','0 530px');
            $('.clock').css('padding-top','120px');
            break;
        }
        
    }
}

var cood ;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    cood = position.coords.latitude + "," + position.coords.longitude;
    $(document).ready(function loadData() {
        var weatherAPIXU = "http://api.apixu.com/v1/current.json?key=b4d27ec0fda9448ca7792516170111&q="+ cood;        
        $.getJSON(weatherAPIXU, function(data) {
            var forecast = data.location.region;
            var region = $(".region");
            region.append(forecast);
            forecast = data.current.temp_c;
            var temp = $(".temp");
            temp.append(forecast+ "&#8451;");
            forecast = data.current.condition.text;            
            var weahterIcon =  data.current.condition.icon;
            var weatherIconObj = $('body').find("#WTicon");
            weatherIconObj.attr('src',"http:"+weahterIcon);
            weatherIconObj.attr('title',forecast);
            weatherIconObj.css('display','block');
            $('.loading').hide();
            
        }).fail(function(e) {
            $(".weather").append('Sorry! Not Loaded');
        });
        $('.weather').submit(loadData);
    });
}

window.onload = getLocation;

var settingHelper={
    generateToolPageEntry:function(icon,title,message,color){
        var div = settingHelper.generateContentSectionStandardDiv();//Div
        div.addClass('popup-setting-div');
        div.css('cursor','pointer');

        var header = settingHelper.generateContentSectionSpecialHeader(title);
        var headerLabel = header.find('label');
        headerLabel.css('color','black');
        headerLabel.css('font-size','16px');
        header.css('cursor','pointer');
        header.click(function(){
            
        });

        var labelUserName = settingHelper.generateContentSectionSpecialHeader(message);
        var label  = labelUserName.find('label');
        label.css('cursor','pointer');
        label.css('color','grey');
        header.append(labelUserName);
        header.find('label').each(function () {
            var label =  $(this);
            label.css('cursor','pointer');
        });

        div.append(header);

        //Logo Section
        var logoDiv = $('<div></div>');
        var logo = $('<div></div>');
        logo.addClass('fa');
        logo.addClass(icon);
        logo.css('font-size','36px');
        logo.css('margin','auto');
        logo.css('color',color);
        logoDiv.css('display','flex');
        logoDiv.css('align-items','center');
        logoDiv.css('height','48px');
        logoDiv.css('width','48px');
        // img.css('border-radius','50%');
        logoDiv.append(logo);
        div.prepend(logoDiv);

        return div;
    },

    generateContentSectionStandardDiv:function(){ //Genereate per row standard div
        var returnResult = $('<div></div>');
        returnResult.css('background-color','white');
        returnResult.css('padding','10px 10px');
        returnResult.hover(function(){
            returnResult.css('background-color','gainsboro');
        },
        function(){
            returnResult.css('background-color','white');
        });
        returnResult.click(function(){
            returnResult.find('.content-focus').focus();
        });
        
        returnResult.css('border-bottom','1px solid #E8E8E8');
        returnResult.css('display','flex');
        returnResult.css('align-items','center');
        returnResult.css('width','100%');

        return returnResult;
    },

    generateContentSectionSpecialHeader:function(headerName){
        var returnResult = $('<div></div>');
        returnResult.css('width','100%');

        var label = $('<label>'+headerName+'</label>');
        label.attr('readonly','readonly');
        label.addClass('popup-display-input-header');
        label.css('color','black');
        label.css('background-color','transparent');
        label.css('border','none');
        label.css('margin-bottom','0px');
        // label.css('margin-bottom','5px');
        label.css('font-size','13px');
        label.css('width','100%');
        label.css('display','block');
        label.css('text-overflow','ellipsis');
        // label.css('white-space','nowrap');

        returnResult.append(label);
        return returnResult;
    }
}

$(document).keydown(function(event) {
    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
            event.preventDefault();
         }
        // 107 Num Key  +
        // 109 Num Key  -
        // 173 Min Key  hyphen/underscor Hey
        // 61 Plus key  +/= key
    });
    
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
           if (event.ctrlKey == true) {
           event.preventDefault();
           }
    });