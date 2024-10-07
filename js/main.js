// import $ from "jquery";
$(".main-apply-btn").on("click", function () {
    $(".popout-apply-notice").css("display", "block");
    $(".popout-overlay").css("display", "block");
});
$(".popout-apply-notice-btn-cancel").on("click", function () {
    $(".popout-apply-notice").css("display", "none");
    $(".popout-overlay").css("display", "none");
});
$(".footer-info-i").on("click", function () {
    $(".footer-info-popout").css("display", "block");
    $(".popout-overlay").css("display", "block");
});
$(".exit-btn").on("click", function () {
    $(".footer-info-popout").css("display", "none");
    $(".popout-overlay").css("display", "none");
});

window.onbeforeunload = confirmExit;

function confirmExit() {
    return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
}

function changeUrlLang(lang) {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    params.set("lang", lang);
    let newRelativePathQuery = window.location.pathname + "?" + params.toString();
    history.pushState(null, "", newRelativePathQuery);
    console.log("lang:" + lang);
}


function switchLocale(lang) {
    $.i18n().locale = lang;
    $.i18n().load({
        en: "js/i18n/en.json?",
        zh: "js/i18n/zh.json?",
    }).done(function () {
        console.log("切換語系");
        $("html").i18n();
        // changeUrlLang(lang);

    });
}

init();

//light update231208 解多語系問題
function init() {
    getUrlVars();
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('#');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var lang = getUrlVars()["lang"];
switch (lang) {
    case 'en':
        switchLocale("en");
        $(".header-localeEng").hide();
        $(".header-localeZh").show();
        console.log("get-en");
        break;
    case 'zh':
        switchLocale("zh");
        $(".header-localeEng").show();
        $(".header-localeZh").hide();
        console.log("get-zh");
        break;
    default :

}
document.querySelector('.popout-apply-notice-btn-cont').addEventListener('click', function() {
    window.location.href = 'apply.html';
});
document.querySelector('.main-inquiry-btn').addEventListener('click', function() {
    window.location.href = 'inquiry.html';
});

