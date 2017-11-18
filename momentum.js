function onGot(item) {
    console.log(item);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

// browser.storage.local.clear();//Purge Storage

$(document).ready(function () {

    MainHelper.documentReady = true;
    if (MainHelper.loadedStorage) {
        MainHelper.loadEnvironment();
    }

    clockHelper.loadClockFromStorage();
    $('.clock_opt').hide();
    $('.SE_opt').hide();

    $('.submit').keydown(function (event) {
        if (event.keyCode == 13) {
            this.form.submit();
            return false;
        }
    });

    var setting = $('.setting');
    var popup = $('.pop_bg');
    var pop = $('.popup_tab');
    var content = $('.ctn');
    var filterVal = "blur(7px)";
    var container = $('.popup_tab_container');
    setting.click(function () {
        popup.css('display', 'block');
        pop.css('display', 'flex');
        container.show();
        content.css('filter', filterVal);
    });

    var clock_list = $('.clock_opt');
    var SE_list = $('.SE_opt');
    var interactive_list = $('.interactive_opt');
    interactive_list.hide();
    var backgroundColor_list = $('.background_opt');
    backgroundColor_list.hide();
    var background_image_list = $('.backgroundImage_opt');
    background_image_list.hide();

    pop.click(function () {
        if ($('.backgroundImage_opt').css('display')!='none' && MainHelper.backgroundChanged){
            location.reload();
        }

        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        clock_list.hide();
        SE_list.hide();
        interactive_list.hide();
        background_image_list.hide();
        backgroundColor_list.hide();
    });


    //**Setting option DIV */
    var clockSetting = settingHelper.generateToolPageEntry('fa-clock-o', 'Clock Setting', 'Customise Clock', 'black');
    clockSetting.click(function (e) {
        clock_list.show();
        container.hide();
        container.css('filter', filterVal);
        e.stopPropagation();
    });
    container.append(clockSetting);
    var searchEngine = settingHelper.generateToolPageEntry('fa-search', 'Search Setting', 'Changes Search Site', 'black');
    searchEngine.click(function (e) {
        SE_list.show();
        container.hide();
        container.css('filter', filterVal);
        e.stopPropagation();
    });
    container.append(searchEngine);
    var backgroundImage = settingHelper.generateToolPageEntry('fa-image', 'Background Image', 'Changes Background Image', 'black');
    backgroundImage.click(function (e) {
        background_image_list.show();
        container.hide();
        container.css('filter', filterVal);
        e.stopPropagation();
    });
    container.append(backgroundImage);
    var interactive = settingHelper.generateToolPageEntry('fa-play-circle', 'Interactive Background Setting', 'Changes Interactive Background', 'black');
    interactive.click(function (e) {
        interactive_list.show();
        container.hide();
        container.css('filter', filterVal);
        e.stopPropagation();
    });
    container.append(interactive);
    var backgroundDiv = settingHelper.generateToolPageEntry('fa-adjust', 'Background Color', 'Changes Background Color', 'black');
    backgroundDiv.click(function (e) {
        backgroundColor_list.show();
        container.hide();
        container.css('filter', filterVal);
        e.stopPropagation();
    });
    container.append(backgroundDiv);


    //**Clock option DIV */
    var clock_0 = clockOption.generateClockOption('images/none.jpg', '200px');
    clock_0.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        $('.clock_opt').hide();
        let clkval = {
            val: -1
        }
        browser.storage.local.set({ clkval });
        let result = browser.storage.local.get("clkval");
        result.then(onGot, onError);

        location.reload();
    })
    clock_list.append(clock_0);
    var clock_1 = clockOption.generateClockOption('images/clock1.png', '200px');
    clock_1.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        $('.clock_opt').hide();
        let clkval = {
            val: 1
        }
        browser.storage.local.set({ clkval });
        let result = browser.storage.local.get("clkval");
        result.then(onGot, onError);
        location.reload();
    })
    clock_list.append(clock_1);
    var clock_2 = clockOption.generateClockOption('images/clock2.png', '200px');
    clock_2.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        $('.clock_opt').hide();
        let clkval = {
            val: 2
        }
        let setting = browser.storage.local.set({ clkval });
        setting.then(null, onError);
        location.reload();
    })
    clock_list.append(clock_2);

    var SE_1 = clockOption.generateClockOption('images/chrome.ico', '200px');
    SE_1.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        SE_list.hide();
        setting = browser.storage.local.set({ searchEngine: 0 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    SE_list.append(SE_1);
    var SE_2 = clockOption.generateClockOption('images/bing.png', '200px');
    SE_2.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        SE_list.hide();
        setting = browser.storage.local.set({ searchEngine: 1 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    SE_list.append(SE_2);
    var SE_3 = clockOption.generateClockOption('images/yahoo.ico', '200px');
    SE_3.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        SE_list.hide();
        setting = browser.storage.local.set({ searchEngine: 2 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    SE_list.append(SE_3);

    //Background Color
    var background0 = clockOption.generateClockOption('images/none.png', '200px');
    background0.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        backgroundColor_list.hide();
        setting = browser.storage.local.set({ backgroundColor: 0 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    backgroundColor_list.append(background0);
    var background1 = clockOption.generateClockOption('images/teal.png', '200px');
    background1.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        backgroundColor_list.hide();
        setting = browser.storage.local.set({ backgroundColor: 1 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    backgroundColor_list.append(background1);
    var background2 = clockOption.generateClockOption('images/blue.png', '200px');
    background2.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        backgroundColor_list.hide();
        setting = browser.storage.local.set({ backgroundColor: 2 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    backgroundColor_list.append(background2);
    var background3 = clockOption.generateClockOption('images/grey.png', '200px');
    background3.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        backgroundColor_list.hide();
        setting = browser.storage.local.set({ backgroundColor: 3 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    backgroundColor_list.append(background3);
    var background4 = clockOption.generateClockOption('images/black.png', '200px');
    background4.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        backgroundColor_list.hide();
        setting = browser.storage.local.set({ backgroundColor: 4 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    backgroundColor_list.append(background4);

    //Interactive
    var interactive0 = clockOption.generateClockOption('images/none.png', '200px');
    interactive0.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        interactive_list.hide();
        setting = browser.storage.local.set({ interactiveBackground: 0 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    interactive_list.append(interactive0);
    var interactive1 = clockOption.generateClockOption('images/polygon.png', '200px');
    interactive1.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        interactive_list.hide();
        setting = browser.storage.local.set({ interactiveBackground: 1 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    interactive_list.append(interactive1);
    var interactive2 = clockOption.generateClockOption('images/snow.png', '200px');
    interactive2.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        interactive_list.hide();
        setting = browser.storage.local.set({ interactiveBackground: 2 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    interactive_list.append(interactive2);
    var interactive3 = clockOption.generateClockOption('images/star.png', '200px');
    interactive3.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        interactive_list.hide();
        setting = browser.storage.local.set({ interactiveBackground: 3 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    interactive_list.append(interactive3);
    var interactive4 = clockOption.generateClockOption('images/nyanStar.png', '200px');
    interactive4.click(function () {
        popup.css('display', 'none');
        pop.css('display', 'none');
        content.css('filter', 'none');
        container.css('filter', 'none');
        interactive_list.hide();
        setting = browser.storage.local.set({ interactiveBackground: 4 });
        setting.then(
            function () {
                location.reload();
            }
        )
    })
    interactive_list.append(interactive4);

});

var MainHelper = {
    documentReady: false,
    loadedStorage: false,
    backgroundChanged:false,
    interactiveBackground: 0,
    searchEngine: 0,
    backgroundColor: 0,
    backgroundImage: ['images/bg01.jpg', 'images/bg02.jpg'],

    loadPersistentStorage: function () {
        var results = browser.storage.local.get({ interactiveBackground: 0, searchEngine: 0, backgroundColor: 0, backgroundImage: ['images/stockBackground/photo1.jpeg', 'images/stockBackground/photo3.jpeg','images/stockBackground/photo4.jpeg','images/stockBackground/photo5.jpeg','images/stockBackground/photo6.jpeg','/images/stockBackground/firefox.gif'] });
        results.then(function (item) {
            MainHelper.interactiveBackground = item.interactiveBackground;
            MainHelper.searchEngine = item.searchEngine;
            MainHelper.backgroundColor = item.backgroundColor;
            MainHelper.backgroundImage = item.backgroundImage;

            console.log('backgroundImageList Length ' + MainHelper.backgroundImage.length);

            MainHelper.loadedStorage = true;
            if (MainHelper.documentReady) { //Do initialize
                MainHelper.loadEnvironment();
            }
        });

        //Loading Interactive Background
    },

    loadEnvironment: function (isOnlyBackground) {
        //Load Interactive Background

        if (!isOnlyBackground) {
            switch (MainHelper.interactiveBackground) {
                case 0:
                    //Load nothing
                    break;
                case 1:
                    // background.css('background','#CC00CC');
                    particlesJS.load('particles-js', 'assets/defaultParticles.json', function () {
                        console.log('callback - particles.js config loaded');
                    });
                    break;
                case 2:
                    // background.css('background',' #0033CC');
                    particlesJS.load('particles-js', 'assets/snowParticles.json', function () {
                        console.log('callback - particles.js config loaded');
                    });
                    break;
                case 3:
                    // background.css('background','darkgrey');
                    particlesJS.load('particles-js', 'assets/starParticles.json', function () {
                        console.log('callback - particles.js config loaded');
                    });
                    break;
                case 4:
                    // background.css('background','#101010');
                    particlesJS.load('particles-js', 'assets/nyanStarParticles.json', function () {
                        console.log('callback - particles.js config loaded');
                    });
                    break;
            }

            //Load Background Color
            var background = $('body');
            switch (MainHelper.backgroundColor) {
                case 0:
                    break;
                case 1:
                    background.css('background', '#00838f');
                    break;
                case 2:
                    background.css('background', '#0033CC');
                    break;
                case 3:
                    background.css('background', 'darkgrey');
                    break;
                case 4:
                    background.css('background', '#101010');
                    break;
            }

            //Load Search Enngine
            switch (MainHelper.searchEngine) {
                case 0:
                    $('.search_form').attr('action', "http://www.google.com/search");
                    $('.submit').attr('placeholder', "Search Google...");
                    break;
                case 1:
                    $('.search_form').attr('action', "http://www.bing.com/search");
                    $('.submit').attr('placeholder', "Search Bing...");
                    break;
                case 2:
                    $('.search_form').attr('action', "http://www.yahoo.com/search");
                    $('.submit').attr('placeholder', "Search Yahoo...");
                    break;
            }
        }

        var settingDiv = $('.backgroundImage_opt');
        settingDiv.empty();
        settingDiv.css('width', '100%');
        settingDiv.click(function (e) {
            e.stopPropagation();
        })
        console.log(settingDiv);
        var imageList = MainHelper.backgroundImage;
        var sampleRow = $('#main-page-image-row-sample').clone();
        sampleRow.css('top', '');
        sampleRow.css('position', '');
        var sampleColumn = $('#main-page-image-sample').clone();
        sampleRow.empty();

        var currentRow;
        var currentColumn;
        //Add all image to settings
        for (var i = 0; i < imageList.length; i++) {
            var imageSrc = imageList[i];

            if (i % 5 == 0) {
                currentRow = sampleRow.clone();
                settingDiv.append(currentRow);
            }

            currentColumn = sampleColumn.clone();
            currentColumn.find('img').attr('src', imageSrc);
            currentColumn.attr('data-index', i);
            currentColumn.click(function () {
                var index = $(this).attr('data-index');
                MainHelper.backgroundImage.splice(index, 1);
                browser.storage.local.set({ backgroundImage: MainHelper.backgroundImage });
                MainHelper.loadEnvironment(true);
                MainHelper.backgroundChanged = true;
            })

            currentRow.append(currentColumn);
        }

        //Add add new image to settings
        var count = imageList.length;
        if (count % 5 == 0) {
            currentRow = sampleRow.clone();
            settingDiv.append(currentRow);
        }

        var addImageColumn = $('#main-page-add-image-sample').clone();
        addImageColumn.css('top', '');
        addImageColumn.css('position', '');
        currentRow.append(addImageColumn);
        addImageColumn.click(function () {
            var fileInput = $('<input id="csv" type="file"></input>');

            fileInput.change(function () {
                // start reading the file. When it is done, calls the onload event defined above.
                getBase64(fileInput.prop('files')[0],
                    function (item) {
                        MainHelper.backgroundImage.push(item);
                        browser.storage.local.set({ backgroundImage: MainHelper.backgroundImage });
                        MainHelper.loadEnvironment(true);
                        MainHelper.backgroundChanged = true;
                    });

            });
            $('html').append(fileInput);
            fileInput.trigger('click');
        })

        //Add all image to background
        if (!isOnlyBackground){
            if (MainHelper.backgroundImage.length > 0)
                SlideShow.initialize(MainHelper.backgroundImage);
        }
        // SlideShow.backgroundSlide(MainHelper.backgroundImage);
    }
}
MainHelper.loadPersistentStorage(); //Initialize

// $(document).ready(function(){
//     $('input').change(function(){
//         var file = $(this).prop('files')[0];
//         getBase64(file); // prints the base64 string
//     })

// })

function getBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
        var dataImage = reader.result;
        callback(dataImage);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

var clockHelper = {
    loadClockFromStorage: function () {
        // browser.storage.local.get();
        var clockVariable = 2;
        let results = browser.storage.local.get({ clkval: {val:2} })
        // results.then(onGot, onError);
        results.then(function (e) {
            if (e.clkval.val != "")
                clockVariable = e.clkval.val;

            console.log(clockVariable);

            switch (clockVariable) {
                case -1:
                    console.log('none');
                    break;
                case 1:
                    clock.oriClock();
                    // $('.clock').css('margin', '0 600px');
                    // $('.clock').css('padding-top', '0');
                    break;
                case 2:
                    clock.clock1();
                    // $('.clock').css('margin', '0 530px');
                    // $('.clock').css('padding-top', '120px');
                    break;
            }
        });
    }
}

var cood;
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
            region.append(forecast + '&nbsp;');
            forecast = data.current.temp_c;
            var temp = $(".temp");
            temp.append(forecast+ "&#8451;&nbsp;");
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

var settingHelper = {
    generateToolPageEntry: function (icon, title, message, color) {
        var div = settingHelper.generateContentSectionStandardDiv();//Div
        div.addClass('popup-setting-div');
        div.css('cursor', 'pointer');

        var header = settingHelper.generateContentSectionSpecialHeader(title);
        var headerLabel = header.find('label');
        headerLabel.css('color', 'black');
        headerLabel.css('font-size', '16px');
        header.css('cursor', 'pointer');
        header.click(function () {

        });

        var labelUserName = settingHelper.generateContentSectionSpecialHeader(message);
        var label = labelUserName.find('label');
        label.css('cursor', 'pointer');
        label.css('color', 'grey');
        header.append(labelUserName);
        header.find('label').each(function () {
            var label = $(this);
            label.css('cursor', 'pointer');
        });
        header.css('margin-left', '10px');

        div.append(header);

        //Logo Section
        var logoDiv = $('<div></div>');
        var logo = $('<div></div>');
        logo.addClass('fa');
        logo.addClass(icon);
        logo.css('font-size', '36px');
        logo.css('margin', 'auto');
        logo.css('color', color);
        logoDiv.css('display', 'flex');
        logoDiv.css('align-items', 'center');
        logoDiv.css('height', '48px');
        logoDiv.css('width', '48px');
        // img.css('border-radius','50%');
        logoDiv.append(logo);
        div.prepend(logoDiv);

        return div;
    },

    generateContentSectionStandardDiv: function () { //Genereate per row standard div
        var returnResult = $('<div></div>');
        returnResult.css('background-color', 'white');
        returnResult.css('padding', '10px 10px');
        returnResult.hover(function () {
            returnResult.css('background-color', 'gainsboro');
        },
            function () {
                returnResult.css('background-color', 'white');
            });
        returnResult.click(function () {
            returnResult.find('.content-focus').focus();
        });

        returnResult.css('border-bottom', '1px solid #E8E8E8');
        returnResult.css('display', 'flex');
        returnResult.css('align-items', 'center');
        returnResult.css('width', '100%');

        return returnResult;
    },

    generateContentSectionSpecialHeader: function (headerName) {
        var returnResult = $('<div></div>');
        returnResult.css('width', '100%');

        var label = $('<label>' + headerName + '</label>');
        label.attr('readonly', 'readonly');
        label.addClass('popup-display-input-header');
        label.css('color', 'black');
        label.css('background-color', 'transparent');
        label.css('border', 'none');
        label.css('margin-bottom', '0px');
        // label.css('margin-bottom','5px');
        label.css('font-size', '13px');
        label.css('width', '100%');
        label.css('display', 'block');
        label.css('text-overflow', 'ellipsis');
        // label.css('white-space','nowrap');

        returnResult.append(label);
        return returnResult;
    }
}

var clockOption = {
    generateClockOption: function (ClockImg, size) {
        var div = clockOption.generateContentSectionStandardDiv();//Div
        div.addClass('popup-setting-div');
        div.css('cursor', 'pointer');

        //Logo Section
        var ImgContainer = $('<div></div>');
        var imgs = $('<img></img>');
        imgs.attr('src', ClockImg);
        imgs.css('font-size', '36px');
        imgs.css('margin', 'auto');
        imgs.css('width', size);
        imgs.css('height', size);
        ImgContainer.css('display', 'flex');
        ImgContainer.css('align-items', 'center');
        ImgContainer.css('height', size);
        ImgContainer.css('width', size);
        ImgContainer.append(imgs);
        div.append(ImgContainer);

        return div;
    },

    generateContentSectionStandardDiv: function () { //Genereate per row standard div
        var returnResult = $('<div></div>');
        returnResult.css('background-color', 'white');
        returnResult.css('padding', '8px');
        returnResult.hover(function () {
            returnResult.css('background-color', 'gainsboro');
        },
            function () {
                returnResult.css('background-color', 'white');
            });
        returnResult.click(function () {
            returnResult.find('.content-focus').focus();
        });

        returnResult.css('border-bottom', '1px solid #E8E8E8');
        returnResult.css('display', 'flex');
        returnResult.css('align-items', 'center');
        returnResult.css('width', 'auto');

        return returnResult;
    },
}

// $(document).keydown(function(event) {
//     if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
//             event.preventDefault();
//          }
//         // 107 Num Key  +
//         // 109 Num Key  -
//         // 173 Min Key  hyphen/underscor Hey
//         // 61 Plus key  +/= key
//     });

//     // $(window).bind('mousewheel DOMMouseScroll', function (event) {
//     //        if (event.ctrlKey == true) {
//     //        event.preventDefault();
//     //        }
//     // });