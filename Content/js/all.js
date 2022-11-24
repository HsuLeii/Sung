//導入header
$(document).ready(function () {
    $('header').load('header.html');
});

//顯示登出按鈕
$(".nav_name").click(function () {
    $(".nav_name_menu").toggle();
});

//答案選擇後加入active
$(".answer_option").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});

//朗讀星星
$(document).ready(function () {
    $(".get_star").find('i').removeClass( "fa-regular" );
    $(".get_star").find('i').addClass( "fa-solid" );
});