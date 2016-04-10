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
    var setSwiper = function() {
        var swiper = new Swiper('section.swiper-container', {
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
    });
    $(".second").on("tap",function(){
        $(".page5 .background").velocity("fadeOut");
        $(".second-image").velocity("fadeIn"); 
    });
    $(".third").on("tap",function(){
        $(".page5 .background").velocity("fadeOut");
        $(".third-image").velocity("fadeIn"); 
    });
    var vswiper ;
    $(".image").on("tap",function(){
        var image = $(this);
        $(".full-image").css({"display":"block"}); 
        if(!vswiper) {
            d = parseInt(image.data("index"));
            console.log(d);
            vswiper = new Swiper('div.swiper-container', {
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
    $(".full-image").on("tap",function(){
        $(this).css("display","none"); 
    });
    $(".swiper-wrapper").on("tap",function(){
        return false; 
    });
}
