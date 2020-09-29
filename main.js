//スムーススクロール
$(function(){
$('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});
});

//SPメニュー
$(function(){
//オープンするときのスクリプト
$('.js-open').click(function(){
    $('.js-sp-menu-list').slideDown();
    $(this).hide();
    $('.js-close').show();
});
//クローズするときのスクリプト（ページ内リンクを踏んだ時を含む）
$('.js-close,.js-link').click(function(){
    $('.js-sp-menu-list').slideUp();
    $('.js-close').hide();
    $('.js-open').show();
});
});