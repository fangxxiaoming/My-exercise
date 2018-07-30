$('.listin1').on('swipeleft',function () {
    $('.listin2').css('left',0);
    $(this).css('left','-100%').removeClass('active');
    $('.icon-right').addClass('active')
    $('.icon-left').removeClass('active');
});
$('.listin2').on('swiperight',function () {
    $('.listin1').css('left',0);
    $(this).css('left','100%');
    $('.icon-right').removeClass('active');
    $('.icon-left').addClass('active')
});
var ajax=new XMLHttpRequest();
ajax.open('get','mall.php');
ajax.send();
ajax.onreadystatechange=function () {
    if(ajax.readyState==4&&ajax.status==200){

    }
};