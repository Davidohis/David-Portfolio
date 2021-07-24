/** GENERALS */
/** ===================== */

var win = $(window);

win.on('load', function() {

    setTimeout(function() {
        $('#preloader').addClass('hide');
    }, 1000);

    // load functions
    grid();

});


