$(function(){
    $.post("/portal/wxconfig/",{
		"url":location.href
	},function(data){
		wx.config(data);
        var share = function() {
            shareJson = {
                link:"http://vs.importos.com",
                imgUrl:"http://vs.importos.com/static/image/share-image.png",
                title:"蔚然大观，揽尽情怀",
                desc:"蔚然大观，揽尽情怀"

            };
			wx.onMenuShareTimeline(shareJson);
			wx.onMenuShareAppMessage(shareJson);
        };
		wx.ready(function(){
            share();
        });
		wx.error(function(res){
			$.get("/portal/update_access_token/",function(data){
				$.post("/portal/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
		                share();
                    });
		        });
		    });
        });
    });
});
