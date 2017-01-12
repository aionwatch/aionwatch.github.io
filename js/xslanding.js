/*!
 *  XS landing - Multipurpose Extra Small Landing Template
 *  To use this theme you must have a license purchased at WrapBootstrap (wrapbootstrap.com)
 *  Copyright 1995-2016 ForBetterWeb.com
*/

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});