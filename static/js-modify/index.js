require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");

window.onload = function(){

    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    on = false;
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    $(".music").on("click",function(){
        if(on) {
            on = false;
            document.getElementById("audio").pause();
            $(".music").removeClass("music-play");
        }   
        else {
            on = true;
            document.getElementById("audio").play();
            $(".music").addClass("music-play");
        }
    });
    var clearAnimation = function(fun) {
        fun();
    };
    var swiper;
    var setSwiper = function() {
        swiper = new Swiper('section.swiper-container', {
            direction:'vertical',
            speed:500,
            onInit: function() {
            },
            onSlideChangeEnd: function(swiper){
                if(swiper.activeIndex == 2) {
                    $(".fly").css("display","block");
                }
                if(swiper.activeIndex == 3) {
                    $(".cloud").css("display","block");
                    $(".pic").css("display","block");
                }
                if(swiper.activeIndex == 4) {
                    $(".page5 .background").on("touchmove",function(){

                        return false;
                    });
                }
            }
        });
    };
    start = 1;
    $(".start-btn").on("tap",function(){
        var t = setInterval(function(){
        console.log(start);
            if(start > 1) {
                $(".start" + start).css("display","block");
                $(".start" + (start-1)).css("display","none");
            }
            if(start == 1) {
                $(".start" + start).css("display","block");
                $(".start").css("display","none");
            }
            if(start == 9) {
                clearInterval(t);
                $(".swiper-container").css("display","block");
                setSwiper();
            }
            start ++;
        },50); 
    });
    $(".first").on("tap",function(){
        $(".page5 .background").velocity("fadeOut");
        $(".first-image").velocity("fadeIn");
        $(".page5 .background").off("touchmove");
        console.log("first");
    });
    $(".second").on("tap",function(){
        $(".page5 .background").velocity("fadeOut");
        $(".second-image").velocity("fadeIn"); 
        $(".page6 .background").css("background-image","url('/static/image/background6-2.jpg')");
        $(".page5 .background").off("touchmove");
        console.log("2");

    });
    $(".third").on("tap",function(){
        $(".page5 .background").velocity("fadeOut");
        $(".third-image").velocity("fadeIn"); 
        $(".page6").remove();
        $(".page5 .background").off("touchmove");
        swiper.update();
        console.log("f3");
    });
    var cnmswiper ;
    $(".page7 .car1").on("tap",function(){
        $(".page7 .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.xiamiancnm.swiper-container', {
                speed:500,
                initialSlide : 1,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(1,0,false);
        }
        
    });
    $(".page7 .car2").on("tap",function(){
        $(".page7 .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.xiamiancnm.swiper-container', {
                speed:500,
                initialSlide : 0,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(0,0,false);
        }
        
    });
    $(".page7 .car3").on("tap",function(){
        $(".page7 .full-image").css({"display":"block"}); 
        if(!vswiper) {
            cnmswiper = new Swiper('div.xiamiancnm.swiper-container', {
                speed:500,
                initialSlide : 2,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(2,0,false);
        }
        
    });
    var cnmswiper;
    $(".cnm .car1").on("tap",function(){
        $(".cnm .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.cnm-container.swiper-container', {
                speed:500,
                initialSlide : 0,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(0,0,false);
        }
    });
    $(".cnm .car2").on("tap",function(){
        $(".cnm .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.cnm-container.swiper-container', {
                speed:500,
                initialSlide : 1,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(1,0,false);
        }
    });
    $(".cnm .car3").on("tap",function(){
        $(".cnm .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.cnm-container.swiper-container', {
                speed:500,
                initialSlide : 2,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(2,0,false);
        }
    });
    $(".cnm .car4").on("tap",function(){
        $(".cnm .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.cnm-container.swiper-container', {
                speed:500,
                initialSlide : 3,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(3,0,false);
        }
    });
    $(".cnm .car5").on("tap",function(){
        $(".cnm .full-image").css({"display":"block"}); 
        if(!cnmswiper) {
            cnmswiper = new Swiper('div.cnm-container.swiper-container', {
                speed:500,
                initialSlide : 4,
                slidesPerView : 1
            });
        }
        else {
            cnmswiper.slideTo(4,0,false);
        }
    });
    $(".show-cnm").on("tap",function(){
        $(".cnm").velocity("fadeIn"); 
    });
    $(".return-cnm").on("tap",function(){
        $(".cnm").velocity("fadeOut"); 
    });
    var vswiper ;
    $(".image").on("tap",function(){
        var image = $(this);
        $(".more .full-image").css({"display":"block"}); 
        if(!vswiper) {
            d = parseInt(image.data("index"));
            console.log(d);
            vswiper = new Swiper('.more div.swiper-container', {
                speed:500,
                initialSlide : d,
                slidesPerView : 1
            });
        }
        else {
            d = parseInt(image.data("index"));
            vswiper.slideTo(d,0,false);
        }

    });
    $("#more").on("tap",function(){
        $(".more").velocity("fadeIn");  
        $(".cnm").velocity("fadeOut"); 
    });
    $(".less").on("tap",function(){
        $(".more").velocity("fadeOut");  

    });
    $(".full-image").on("tap",function(){
        $(this).css("display","none"); 
    });
    $(".swiper-wrapper").on("tap",function(){
        return false; 
    });
}
