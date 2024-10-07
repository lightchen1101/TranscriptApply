// import $ from "jquery";

function openTab(tabId) {
    $('.tab-content').hide();
    $('#' + tabId).show();
    $('.tab').css({
        'background-color': '#FFFFFF',
        'color': '#933243'
    });

    $('#bar-tab' + tabId.charAt(3)).css({
        "background-color": "#933243",
        'color': '#FFFFFF'
    });
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openTabPrev() {
    var currentTabId = $('.tab-content:visible').attr('id');
    var matches = currentTabId.match(/(tab\d+)-(.+)/);
    var currentTabPrefix = matches ? matches[1] : '';
    var currentTabSuffix = matches ? matches[2] : '';
    if (currentTabPrefix === 'tab3') {
        openTab('tab2');
        return;
    }
    if (currentTabId === 'tab2') {
        openTab('tab1');
        return;
    }
    var currentTabIndex = parseInt(currentTabPrefix.replace('tab', ''));
    var prevTabIndex = currentTabIndex - 1;
    if (prevTabIndex < 1) {
        prevTabIndex = 1;
    }
    var prevTabId = 'tab' + prevTabIndex + '-' + currentTabSuffix;
    openTab(prevTabId);
}


function switchToName() {
    $('#name').parent().show();//light update 24/01/09 要隱藏的是label,可以在refactor,用parent比較不好
    $('#uid').parent().hide();
    /*
    隱藏input的話 label元素仍然存在,所以對在上一層的div flex gap來說是2個元素,切換就會有一個高度落差,但就是lable這個元素,只是裡面是空的
    */
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

$(".tab4-submit-btn3").on("click", function () {
    $(".popout-close-window").css("display", "block");
    $(".popout-overlay").css("display", "block");
    $(".popout-close-window-btn-cancel").on("click", function () {
        $(".popout-close-window").css("display", "none");
        $(".popout-overlay").css("display", "none");
    });
    $(".popout-close-window-btn-confirm").on("click", function () {
        window.location.href = 'index.html';
    });
});


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id');
togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

$(".apply-detail-popout").on("click", function () {
    $(".tab5-container-detail-popout").css("display", "flex");
});
$(".tab5-container-detail-exit-btn").on("click", function () {
    $(".tab5-container-detail-popout").css("display", "none");
});

$(".expand").click(function () {
    let target = $(this).data("target");
    $("." + target).toggleClass("hidden");

});


if (true) {
    $(".tab3-input-text").addClass("invalid");
    $(".tab3-input select").addClass("invalid");
}

$(".popout-postage").on("click", function () {
    $(".popout-postage-detail").css("display", "flex");
    $(".popout-overlay").css("display", "block");
});
$(".popout-postage-exit-btn").on("click", function () {
    $(".popout-postage-detail").css("display", "none");
    $(".popout-overlay").css("display", "none");
});
$(".tab3-new-email").on("click", function () {
    $(".tab3-input-addemail").css("display", "flex");
    $(".tab3-new-email").css("display", "none");
});

$(".footer-info-i").on("click", function () {
    $(".footer-info-popout").css("display", "block");
    $(".popout-overlay").css("display", "block");
});
$(".exit-btn").on("click", function () {
    $(".footer-info-popout").css("display", "none");
    $(".popout-overlay").css("display", "none");
});
window.onload = function () {
    openTab('tab1');
};

$(".tab1-input-submit").on("click", function () {

});
//light update 0408
window.onbeforeunload = onclose;

function onclose() {
    return "";
}
