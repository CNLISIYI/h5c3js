/*
 * 首页
 */
// 数字滚动组件
+
function ($) {
    jQuery.extend({
        rollnumber: function (options) {
            var defaults = {
                numlength: 4,
                numArr: ["60916", "641785", "280640", "5222550"],
                txtArr: ["家", "门", "次", "位"],
                secTitle: ["入驻机构", "全部课程", "真实评价", "报名学员"],
                inslabel: ".chome-data-container",
                complete: () => {}
            }
            var opts = $.extend({}, defaults, options || {}),
                numberStr = '';
            numberStr = `<ul class="number-data"></ul>`
            $(opts.inslabel).append(numberStr);
            for (let i = 0; i < opts.numArr.length; i++) {
                let thisnum = $.numFormat(opts.numArr[i]);
                let thisnumArr = thisnum.split(",");
                let number_li = `<li></li>`
                $(".number-data").append(number_li)
                for (let j = 0; j < thisnumArr.length; j++) {
                    let number_span = `<span class="count">${thisnumArr[j]}</span>,`
                    if (j == thisnumArr.length - 1) {
                        number_span = `<span class="count">${thisnumArr[j]}</span>`
                    }
                    $(".number-data li").eq(i).append(number_span);
                }
            }
            for (let p = 0; p < opts.txtArr.length; p++) {
                let txt_span = `<span class="data-txt">${opts.txtArr[p]}</span>`;
                let sectitle = `<p class="txt">${opts.secTitle[p]}</p>`
                $(".number-data li").eq(p).append(txt_span);
                $(".number-data li").eq(p).append(sectitle);
            }
            // 滚动效果
            var num = [];
            for (let i = 0; i < $(".number-data").find(".count").length; i++) {
                num[i] = $(".count").eq(i).text();
                if (num[i].indexOf('/script>') > 0)
                    num[i] = num[i].substring(num[i].indexOf('/script>') + 8);
            }
            $(function () {
                for (let i = 0; i < $(".number-data").find(".count").length; i++) {
                    if (parseInt(num[i]) == 0) {
                        return;
                    } else if (parseInt(num[i]) < 100) {
                        $('.count').eq(i).animationCounter({
                            start: 0,
                            end: num[i],
                            step: 1,
                            delay: 10
                        });
                    } else if (parseInt(num[i]) < 220) {
                        $('.count').eq(i).animationCounter({
                            start: 0,
                            end: num[i],
                            step: 3,
                            delay: 10
                        });
                    } else {
                        $('.count').eq(i).animationCounter({
                            start: 0,
                            end: num[i],
                            step: parseInt(num[i] / 100),
                            delay: 10
                        });
                    }
                }
            })
        },
        numFormat(num) {
            return parseFloat(num).toLocaleString();
        }
    })
}(jQuery)
$(function () {
    $.fn.animationCounter = function (options) {
        return this.each(function () {
            try {
                var element = $(this);
                var defaults = {
                    start: 0,
                    end: null,
                    step: 1,
                    delay: 1000,
                    txt: ""
                }
                var settings = $.extend(defaults, options || {})
                var nb_start = settings.start;
                var nb_end = settings.end;
                element.text(nb_start + settings.txt);
                var counter = function () {
                    if (nb_end != null && nb_start >= nb_end) {
                        ints = window.clearInterval(ints);
                        return;
                    }
                    if (nb_start + settings.step > nb_end) {
                        nb_start = nb_end;
                    } else {
                        nb_start = nb_start + settings.step;
                    }
                    if (nb_end.slice(0, 2) == '00') {
                        element.text('00' + nb_start + settings.txt);
                    } else if (nb_end.slice(0, 1) == '0') {
                        element.text('0' + nb_start + settings.txt);
                    } else {
                        element.text(nb_start + settings.txt);
                    }
                }
                var ints = setInterval(counter, settings.delay);
            } catch (e) {
                alert(e + ' at line ' + e.lineNumber);
            }
        });
    }
});

// 标题切入效果
$(window).scroll(function () {
    var window_top = $(window).scrollTop();
    for (let i = 0; i < $(".title-animate").length; i++) {
        if (window_top > $(".title-animate")[i].offsetTop - window.innerHeight) {
            $(".title-animate").eq(i).addClass("bxk-fadein");
        }
    }
})

//tab切换
$(document).on("mouseenter", ".chome-tab-nav li", function () {
    $(this).addClass("on").siblings().removeClass("on");
    let num = $(this).index();
    $(this).parents(".chome-tab-nav").next().find(".chome-tab-list").eq(num).addClass("istabshow").siblings().removeClass("istabshow");
}).on("mouseenter", ".chome-banner-left li", function () {
    $(this).addClass("on");
    let num = $(this).index();
    $(this).parents(".chome-banner-left").siblings(".chome-tab-box").find(".chome-banner-right").eq(num).show();
}).on("mouseleave", ".chome-banner-left li", function () {
    $(this).removeClass("on");
    let num = $(this).index();
    $(this).parents(".chome-banner-left").siblings(".chome-tab-box").find(".chome-banner-right").eq(num).hide();
}).on("mouseenter", ".swiper-slide", function () { // 悬停效果
    // $(this).find(".teacher-item-name").addClass("color_1a8cff");
    $(this).find(".teacher-item-intro").addClass("box-hover");
    $(this).find(".teacher-item-avatar img").addClass("img-hover").removeClass("img-leave")
}).on("mouseleave", ".swiper-slide", function () {
    // $(this).find(".teacher-item-name").removeClass("color_1a8cff")
    $(this).find(".teacher-item-intro").removeClass("box-hover");
    $(this).find(".teacher-item-avatar img").removeClass("img-hover").addClass("img-leave")
}).on("mouseenter", ".chome-xun-cont li, .chome-course-list dd", function () {
    $(this).addClass("box-hover");
    $(this).find("img").addClass("img-hover").removeClass("img-leave")
}).on("mouseleave", ".chome-xun-cont li, .chome-course-list dd", function () {
    $(this).removeClass("box-hover");
    $(this).find("img").removeClass("img-hover").addClass("img-leave")
}).on("mouseenter", ".chome-banner-right", function () {
    $(this).show();
}).on("mouseleave", ".chome-banner-right", function () {
    $(this).hide();
})
$(document).on("mouseenter", ".top-nav-dropdown", function () {
    var $kid = $(this).find(".top-nav-dropdown-child");
    $kid.show();
}).on("mouseleave", ".top-nav-dropdown", function () {
    var $kid = $(this).find(".top-nav-dropdown-child");
    $kid.hide();
})
//搜索关联
$(document).on("input propertychange", ".top-cont-msearch-input", function () {
    var $sib = $(this).siblings(".top-search-about");
    var txt = $(this).val();
    txt = $.trim(txt);
    if (txt == "") {
        $sib.hide();
    } else {
        $sib.show();
    }
});
$(".teacher-item-btn").click(function () {
    $(".teacher-bxk-outer").hide();
    clearBorder();
    $(".chome-teacher-cont .xuanke-after").slideUp(300).next().slideUp(300);
    $(this).parent().next().show().next().slideDown(300).addClass("isshow");
})
$(".chome-teacher-cont .xuanke-hide").click(function () {
    clearBorder();
    $(this).parent().slideUp(300).removeClass("isshow").prev().hide();
})
$(".teacher-bxk-outer").click(function () {
    clearBorder();
    $(this).hide().next().slideUp(300).removeClass("isshow").next().slideUp(300);
})
/*
 * 帮选课
 */
$(".chome-xuanke-outer .xk-form-show").click(function () {
    $(this).parent().parent().parent().siblings(".xuanke-after").slideDown(500).addClass("firisshow");
    $(".xuanke-before").hide();
})
$(".chome-xuanke-outer .xuanke-hide").click(function () {
    $(".xuanke-before").show();
    $(this).parent().slideUp(500).removeClass("firisshow");
})
$(document).on("input propertychange", ".xk-phone,.rz-phone", function () {
    if (this.value.length == 1) {
        this.value = this.value.replace(/[^19]/g, '')
    } else {
        this.value = this.value.replace(/\D/g, '')
    }
})

$(".rz-phone").blur(function () {
    if (isNull('.rz-name')) {
        isNull('.rz-user');
        if (isNull('.rz-user')) {
            isPhoneNull('.rz-phone');
        }
    }
})
$(".xuanke-after input").focus(function () {
    $(".xuanke-after").find("li").removeClass("blue-border");
    $(".xuanke-after").find(".bxk-li").removeClass("blue-border");
    $(this).parent().removeClass("red-border");
    $(this).parent().addClass("blue-border");
    $(this).next().hide();
}).blur(function () {
    $(".xuanke-after").find("li").removeClass("blue-border");
    $(".xuanke-after").find(".bxk-li").removeClass("blue-border");
})
$(".bxk-button").mouseenter(function () {
    $(this).addClass("hover-btn").removeClass("leave-btn");
}).mouseleave(function () {
    $(this).addClass("leave-btn");
})
$(".form-outer, .rz-form-title .icon-wudi7,.bxk-success-box button").click(function () {
    $(".form-outer").hide();
})
$(".xuanke-after .bxk-button").click(function() {  //提交表单按钮
    // 帮选课
    $(".xk-title-b").hide();
    $(".isshow").hide().next().slideDown(300); //顾问
    $(".firisshow").hide().next().slideDown(300); //banner

    // 首页
    // $(".isshow").hide().next().slideDown(300);
})
$(".xuanke-success .bxk-button").click(function() {  //提交成功后的确定按钮
    // 帮选课
    $(".xuanke-success").slideUp(300);
    $(".xuanke-before").show();
    clearForm();
    $(".firisshow").show();
    $(".xk-title-b").show();

    // 首页
    // $(".xuanke-success").slideUp(300);
    // $(".xuanke-before").show();
    // clearForm();
})
$(".bxk-process-btn").click(function () {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
})
$(".bxk-success-box, .enter-form-box").click(function () {
    event.stopPropagation();
})

function isPhoneNull(classname) {
    let thisname = classname;
    if (!(/^1[3456789]\d{9}$/.test($(thisname).val()))) {
        $(thisname).next().show();
        $(thisname).parent().addClass("red-border");
        return false;
    } else {
        $(thisname).next().hide();
        $(thisname).parent().removeClass("red-border");
        return true;
    }
}

function isNull(classname) {
    let thisname = classname;
    if ($(thisname).val() == "") {
        $(thisname).next().show();
        $(thisname).parent().addClass("red-border");
        return false;
    } else {
        $(thisname).next().hide();
        $(thisname).parent().removeClass("red-border");
        return true;
    }
}

function clearBorder() {
    $(".red-border").removeClass("red-border");
    $(".blue-border").removeClass("blue-border");
    $(".xuanke-after").find(".input-error").hide();
    $(".isshow").removeClass("isshow");
}
function clearForm() {
    $(".xuanke-after").find("input").val("");
    $(".chome-teacher-cont .xuanke-after").hide();
    $(".teacher-bxk-outer").hide();
}
function clearRzForm() {
    $(".enter-form-box").find("input").val("");
}
/*
 * 点评奖金
 */
$(".ping-img-outer").mouseenter(function () {
    $(this).addClass("img-border");
}).mouseleave(function () {
    let isshow = $(this).parent().parent().siblings(".ping-imgshow").is(":hidden");
    let isopacity = $(this).find(".ping-img-item").is(".img-opacity");
    if (isshow || isopacity) {
        $(this).removeClass("img-border");
    }
}).click(function () {
    let thisimg = $(this).find("img").attr("src");
    clearImg();
    $(this).addClass("img-border").siblings().find(".ping-img-item").addClass("img-opacity");
    $(this).parent().parent().siblings(".ping-imgshow").show().find("img").attr("src",
        thisimg);
})
$(".ping-imgshow").click(function () {
    clearImg();
    $(this).hide();
})
// 清除图片样式
function clearImg() {
    $(".img-border").removeClass("img-border");
    $(".img-opacity").removeClass("img-opacity");
    $(".ping-imgshow").hide();
}

/*
 * 媒体报道页 
 */
$(".news-address").attr('href', $(".news-address").text());
$(document).on("mouseenter", ".news-date img", function () {
    let newSrc = $(this).attr("src").replace("wx", "wx-pre");
    $(this).attr("src", newSrc);
    $(".erweima-box").show();
}).on("mouseleave", ".news-date img", function () {
    let newSrc = $(this).attr("src").replace("wx-pre", "wx");
    $(this).attr("src", newSrc);
    $(".erweima-box").hide();
}).on("mouseenter", ".news-href", function () {
    $(".news-address").addClass("color_1a8cff");
}).on("mouseleave", ".news-href", function () {
    $(".news-address").removeClass("color_1a8cff");
})
// 动态引入css文件函数
function includeLinkStyle(url) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.charset = "UTF-8";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}
// 动态引入template
function includeTemplate(url,addin) {
    let temp = document.createElement("vt:template");
    $(temp).attr("file",url);
    $(addin)[0].appendChild(temp);
}