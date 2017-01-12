(function($){
    "use strict";
    var $code = '<style>.settings-btn,.settings-panel{position:absolute;color:#fff!important}.settings-panel{background:rgba(0,0,0,.93);display:none;top:0;right:0;outline:0;z-index:9998;padding:10px 10px 30px;min-width:100%}.settings-panel .row{padding-top:100px}a.settings-btn{text-decoration:none;text-transform:uppercase;letter-spacing:1px;font-size:10px}.settings-btn{border-radius:2px;background:rgba(0,0,0,0.4);padding: 10px 20px 8px 30px;width:auto;height:auto;top:15px;left:0;z-index:99999;opacity:.6}.settings-btn:hover{opacity:.5}.settings-btn .icon{font-size:24px;vertical-align:middle;line-height:24px}.settings-panel .current img,.settings-panel img:hover{border:2px solid #ddd}.settings-panel img{max-width:100%;margin-bottom:10px;border:2px solid #000}.settings-panel h4{padding:8px 0}</style>\
    <a href="#" class="settings-btn wow fadeInLeft" data-wow-duration="2s" data-wow-delay="1s">More Demos <i class="icon fa fa-toggle-off wow flash" data-wow-iteration="999" data-wow-duration="4s"></i></a>\
    <div class="settings-panel text-center">\
    <div class="container">\
    <div class="row">\
    <div class="col-sm-4 col-md-3"><a href="index1.html"><img src="img/screenshots/screenshot.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index2.html"> <img src="img/screenshots/screenshot2.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index3.html"> <img src="img/screenshots/screenshot3.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index4.html"> <img src="img/screenshots/screenshot4.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index5.html"> <img src="img/screenshots/screenshot5.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index6.html"> <img src="img/screenshots/screenshot6.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index7.html"> <img src="img/screenshots/screenshot7.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index8.html"> <img src="img/screenshots/screenshot8.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index9.html"> <img src="img/screenshots/screenshot9.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index10.html"> <img src="img/screenshots/screenshot10.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index11.html"> <img src="img/screenshots/screenshot11.png"></a></div>\
    <div class="col-sm-4 col-md-3"><a href="index12.html"> <img src="img/screenshots/screenshot12.png"></a></div>\
    </div><p></p><a href="documentation/index.html" class="btn btn-white wow fadeInLeft">Documentation</a></div></div>';
    $(document).ready(function () {
        $('.demo-switcher').after($code);
    });
})(jQuery);

$(function(){
    var isOpened=false;
    $(".settings-btn").click(function(e){e.preventDefault();
        $(".settings-panel").slideToggle(500);
        if(isOpened){isOpened=false;
            $(this).html('More Demos <i class="icon fa fa-toggle-off"></i>')}
        else{
            $(this).html('More Demos <i class="icon fa fa-toggle-on"></i>');
            isOpened=true}
    })});