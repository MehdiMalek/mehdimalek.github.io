var is_first_show_desktop_pic = false;
var is_dark = false;

$(window).scroll(function (event) {
    if ($(window).scrollTop() < 300) {
        $("#navbarParent").slideUp(500);
        $("#btnTheme").fadeOut(500);
    } else {
        $("#navbarParent").slideDown(500);
        $("#btnTheme").fadeIn(500);
    }
    // $("#scroll_show").html($(window).scrollTop() + $(window).height()+" && "+$(document).height())
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 75) {
        show_destkop_pictures();
    }
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.sidenav').sidenav();
    $('.modal').modal();
});

function body_load() {
    is_dark = parseInt(localStorage.getItem("is_dark")) == 1 ? true : false;
    change_theme();
    $("#desktop_div").show();
    window.setTimeout(function () {
        typeWriter();
    }, 250);
    $("#insta_embded").html('<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CB50UN-HLTJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="12" style="border:0; border-radius:5px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/CB50UN-HLTJ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/CB50UN-HLTJ/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by رستوران پيرو (جاويد هاشمى) (@piero_italian_restaurant)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2020-06-26T15:30:58+00:00">Jun 26, 2020 at 8:30am PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>');
    set_data();
}

var cnt = 0;
const txt = "Hello, I'm Arian";
var speed = 40;

function typeWriter() {
    if (cnt < txt.length) {
        document.getElementById("title_name").innerHTML += txt.charAt(cnt);
        cnt++;
        speed = speed + 12;
        setTimeout(typeWriter, speed);
    } else {
        anime_title();
    }
}

function anime_title() {
    $("#title_detail").show();
    anime({
        targets: "#title_detail path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 8000
    });
}

function show_destkop_pictures() {
    if (is_first_show_desktop_pic) {
        return;
    }
    show_hide_install_icon();
    is_first_show_desktop_pic = true;
    window.setTimeout(function () {
        $("#div_desktop_images").show();
        $("#desktop_icon").show();
        $("#desktop_title").show();
        scroll_element("div_desktop", 68, 500);
    }, 50);

    var tl = anime.timeline({});
    tl.add({
        targets: ".desk_application",
        opacity: 0,
        translateY: 2000,
        duration: 50
    }).add({
        targets: ".desk_application",
        easing: 'easeInOutQuad',
        translateY: 0,
        opacity: 1,
        direction: 'alternate',
        delay: function (el, i, l) {
            return i * 100;
        },
        duration: 1500
    });
    window.setTimeout(function () {
        show_web_app_div();
    }, 1500)
}

// function set_interesting_anime() {
//     anime({
//         targets: ".inside_card_panel",
//         easing: 'easeInOutQuad',
//         rotate: 40,
//         direction: 'alternate',
//         loop: true,
//         duration: 1200
//     });
// }

function show_web_app_div() {
    $("#div_rest").show();
}

var is_call_menu = true;
var last_call_menu = 0;

function call_menu(is_mobile, id) {
    if (is_call_menu == false && last_call_menu == id) {
        return;
    }
    if (is_first_show_desktop_pic == false) {
        show_destkop_pictures();
    }
    if (id > 2) {
        show_web_app_div();
    }
    is_call_menu = false;
    last_call_menu = id;
    window.setTimeout(function () {
        is_call_menu = true;
    }, 1000);
    let div_id = "";
    let top = 56;
    switch (id) {
        case 1: {
            div_id = "div_top";
            break;
        }
        case 2: {
            div_id = "div_desktop";
            top = 68;
            break;
        }
        case 3: {
            div_id = "div_webapp";
            break;
        }
        case 4: {
            div_id = "work_div";
            break;
        }
        case 5: {
            div_id = "about_div";
            break;
        }
        case 6: {
            div_id = "contact_div";
            break;
        }
    }
    if (div_id.length > 0) {
        if (is_mobile == 1) {
            window.setTimeout(function () {
                scroll_element(div_id, top, 500);
            }, 250)
        } else {
            scroll_element(div_id, top, 500);
        }
    }
}

function scroll_element(id, top, option) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top - top
    }, option);
}

var is_scale = false;
var scale_size = 1.3;

function box_hover() {
    is_scale = !is_scale;
    var tl = anime.timeline({});
    if (is_scale) {
        $("#icon_box").html("zoom_out");
        tl.add({
            targets: ".box1",
            easing: 'easeInOutQuad',
            scale: scale_size,
            duration: 250,
            delay: anime.stagger(125, {start: 0})
        })
    } else {
        $("#icon_box").html("zoom_in");
        tl.add({
            targets: ".box1",
            easing: 'easeInOutQuad',
            scale: 1,
            duration: 250,
            delay: anime.stagger(125, {start: 0})
        })
    }

}

function change_theme() {

    let colors = new Object();

    colors.navBackColor = "#263238";
    colors.navHoverBackColor = "#37474f";
    colors.backColor = "#fff";
    colors.titleColor = "#455a64";
    colors.detailColor = "#37474f";
    colors.icon = "#263238";
    colors.boxBack = "#455a64";
    colors.boxColor = "#eceff1";

    if (is_dark) {
        colors.navBackColor = "#202020";
        colors.navHoverBackColor = "#151515";
        colors.backColor = "#151515";
        colors.titleColor = "#b0bec5";
        colors.detailColor = "#cfd8dc";
        colors.icon = "#fafafa";
        colors.boxBack = "#303030";
        colors.boxColor = "#eceff1";
    }

    document.documentElement.style.setProperty('--nav-back-color', colors.navBackColor);
    document.documentElement.style.setProperty('--nav-hover-back-color', colors.navHoverBackColor);
    document.documentElement.style.setProperty('--back-color', colors.backColor);
    document.documentElement.style.setProperty('--title-color', colors.titleColor);
    document.documentElement.style.setProperty('--detail-color', colors.detailColor);
    document.documentElement.style.setProperty('--icon', colors.icon);
    document.documentElement.style.setProperty('--box-back', colors.boxBack);
    document.documentElement.style.setProperty('--box-color', colors.boxColor);

    $("#spanBoxTheme").removeClass("grey").removeClass("white").addClass(is_dark ? "white" : "grey")

    localStorage.setItem("is_dark", (is_dark ? 1 : 0));
    is_dark = !is_dark;

    $("#btnTheme").html("<i class='material-icons'>" + (is_dark ? 'brightness_3' : 'wb_sunny') + "</i>")
    $("#btnTheme").removeClass("darken-4").removeClass("lighten-2").addClass(is_dark ? 'darken-4' : '');
}

// -------------------------------------------------------------------- --

function change_media(x) {
    if (x.matches) {
        scale_size = 1.2;
    } else {
        scale_size = 1.5;
    }
}

var medi_size_x = window.matchMedia("(max-width: 600px)")
change_media(medi_size_x)
medi_size_x.addListener(change_media)

// -------------------------------------------------------------------- --

function modal_custom(html, is_outside_close_on) {
    $("#modal_custom").html(html);

    if (is_outside_close_on) {
        $('#modal_custom').modal()[0].M_Modal.options.dismissible = false;
        // $('#modal_custom').modal()[0].M_Modal.options.preventScrolling = false;
    }
    $('#modal_custom').modal('open');
    $('#modal_custom').scrollTop(0);
}

// ------------------------------------------------------------------- --

function show_hide_install_icon() {
    if (check_is_pwa()) {
        return;
    }
    if(check_is_mobile() == false){
        return;
    }
    window.setTimeout(function () {

        window.setTimeout(function () {
            $(".install_icon").show();
        }, 100)
        var tl = anime.timeline({});
        tl.add({
            targets: ".install_icon",
            translateX: -500,
            duration: 100
        }).add({
            targets: ".install_icon",
            easing: 'easeInOutQuad',
            opacity: 0.9,
            translateX: 0,
            duration: 1500
        })

    }, 1500)
}

// ------------------------------------------------------------------- --
function reportWindowSize() {
    change_back_image();
}

function change_back_image() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
        $("#img_back").attr("src", "assets/img/2.jpg");
    } else {
        $("#img_back").attr("src", "assets/img/1.jpg");
    }
}

window.onresize = reportWindowSize;
change_back_image();
