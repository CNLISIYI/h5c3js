/*
 * 首页
 */
$(document).on("click", ".nav-box li", function () { //头部导航切换
    $(this).addClass("on").siblings().removeClass("on")
})
/*
 * 产品页
 */
.on("click", ".pro-main .i-down", function () { //左侧导航收起
    $(this).removeClass("i-down").addClass("i-right").text("＞").parent().parent().find(".list")
        .toggleClass("hide")
}).on("click", ".pro-main .i-right", function () { //左侧导航展开
    $(this).removeClass("i-right").addClass("i-down").text("﹀").parent().parent().find(".list")
        .toggleClass("hide")
}).on("click", ".pro-main .list span", function () { //左侧导航点击
    $(".pro-main").find(".list").find("span").removeClass("active");
    $(this).addClass("active").parent().parent().addClass("on").siblings().removeClass("on")
}).on("click", ".pagination span", function () { //分页
    let _name = $(this).attr("name"),
        idx = $(".pagination").find(".on").index(),
        max = $(".pagination").find("span").length - 3;
    if (_name == 'first') { //首页
        $(".pagination").find("span").eq(2).addClass("on").siblings().removeClass("on");
    } else if (_name == "last") { //尾页
        $(".pagination").find("span").eq(max).addClass("on")
            .siblings().removeClass("on");
    } else if (_name == 'prev' && idx > 2) { //上一页
        $(".pagination").find("span").eq(idx - 1).addClass("on").siblings().removeClass("on");
    } else if (_name == 'next' && idx < max) { //下一页
        $(".pagination").find("span").eq(idx + 1).addClass("on").siblings().removeClass("on");
    } else if ($(this).index() > 1 && $(this).index() < max + 1) { //数字
        $(this).addClass("on").siblings().removeClass("on");
    }
})
/*
 * 产品详情页
 */
.on("click", ".edit-box, .edit-btn", function () { //打开修改数据
    $(".mask").show().find(".edit-outer").show();
}).on("click", ".mask", function () { //关闭弹窗
    $(this).hide();
}).on("click", ".download-btn", function () { //下载验证手机号
    $(".mask").show().find(".tell-outer").show();
}).on("click", ".pro-main .nav-box li", function () { //切换内导航
    let idx = $(this).index();
    $(".pro-main").find(".box-item").hide().eq(idx).show();
})
var timer;
$(".get-code").click(function () { //点击发送验证码
    var codeTime = 60;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        $('.get-code').attr("disabled", true).addClass("dis").text(codeTime + 's后重发');
        codeTime--;
        if (codeTime < 0) {
            codeTime = 60;
            $('.get-code').removeClass('dis').text('获取验证码');
            clearInterval(timer);
        }
    }, 1000)
})
// 防止冒泡点击
$(".edit-outer, .suc-outer, .tell-outer").click(function () {
    event.stopPropagation();
})
// 提交修改
$(".sub-btn").click(function () {
    $(".edit-outer").hide();
    $(".suc-outer").show();
})
// 成功确认按钮
$(".sure-btn").click(function () {
    $(".mask").hide().find(".suc-outer").hide();
})

/*
* 个人中心
*/ 
$(".send-code").click(function () { //点击发送验证码
    var codeTime = 60;
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        $('.send-code').attr("disabled", true).addClass("dis").text(codeTime + 's后重发');
        codeTime--;
        if (codeTime < 0) {
            codeTime = 60;
            $('.send-code').removeClass('dis').text('获取验证码');
            clearInterval(timer);
        }
    }, 1000)
})

$(document).on("click", ".my-navs span", function () { //我的修改状态筛选
    let idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".myedit-list").hide().eq(idx).show()
})