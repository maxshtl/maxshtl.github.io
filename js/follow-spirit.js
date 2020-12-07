$(function () {
    $('#mouseSpirit').css({overflow: 'hidden', position: 'absolute', top: '0', left: '0'});

    $('html').mousemove(function (e) {
        var icon = $('#mouseSpirit').offset();
        $('#mouseSpirit').stop();
        $('#mouseSpirit').animate({
            top: e.pageY + 5,
            left: e.pageX + 10
        }, {
            duration: 1000,
            specialEasing: {
                top: 'easeOutCirc',
                left: 'easeOutCirc'
            }
        });
    });
});
