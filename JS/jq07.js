$(document).ready(function(){
    var speed = 200
    $('ul.panels li:last-child').addClass('last')

    $('ul.panels li').hover(function() {
        $(this).stop().animate({
            width:'360',
            fontSize: '150px'
        },speed)
        .siblings('li').stop().animate({
            width:'135px',
            fontSize:'150px'
        },speed)
    }),
    function () {
        $(this).stop().animate({
            width: '180px',
            fontSize:'100px'
        },speed)
        .siblings('li').stop().animate({
            width:'180px',
            fontSize:'100px'
        },speed)
    }

})