// import $ from "jquery";
function switchToName() {
    $('#name').parent().show();
    $('#uid').parent().hide();
}

function switchToUid() {
    $('#uid').parent().show();
    $('#name').parent().hide();
}

$(".service-description-btn").on('click', function () {
    $(".popout-service-description").css("display", "block");
    $(".popout-overlay").css("display", "block");
});
$(".exit-btn").on("click", function () {
    $(".popout-service-description").css("display", "none");
    $(".popout-overlay").css("display", "none");
});
$(".tab1-input-submit").on("click", function () {
    $(".tab1").css("display", "none");
    $(".inquiry-tab2").css("display", "flex");
    $(".main-title-sub").css("display", "block");

});



$(".tab2-payment-progress-number>span").bind("click", function (e) {
    $(e.target).parent().parent().parent().next().toggleClass("open-cont");
    $(".tab2-payment-progress-number>span").transform()

});

$(".footer-info-i").on("click", function () {
    $(".footer-info-popout").css("display", "block");
    $(".popout-overlay").css("display", "block");
});
$(".footer-info-exit-btn").on("click", function () {
    $(".footer-info-popout").css("display", "none");
    $(".popout-overlay").css("display", "none");
});

document.querySelector('.tab2-submit-btn1').addEventListener('click', function() {
    window.location.href = 'apply.html';
});
