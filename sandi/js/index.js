/*
* 发展历程
*/ 
$(document).on("click", ".deve-box .more", function () { //点击加载更多
    let _new = `<li>
        <i></i>
        <h3>2009年<span>环境</span></h3>
        <p>环境标志产品认证证书；证书编号：CEC072913704817953325263。</p>
    </li>`
    $(".develop-list").append(_new)
})
/*
* 公共
*/ 
.on("click", ".pagination span", function () { //分页
    let _name = $(this).attr("name"),
        idx = $(".pagination").find(".on").index(),
        max = $(".pagination").find("span").length - 2;
    if (_name == 'prev' && idx > 1) { //上一页
        $(".pagination").find("span").eq(idx - 1).addClass("on").siblings().removeClass("on");
    } else if (_name == 'next' && idx < max) { //下一页
        $(".pagination").find("span").eq(idx + 1).addClass("on").siblings().removeClass("on");
    } else if ($(this).index() > 0 && $(this).index() < max + 1) { //数字
        $(this).addClass("on").siblings().removeClass("on");
    }
}).on("mouseenter",".nav-list li", function() { //pc导航下拉显示
    $(this).find(".dropdown").slideDown();
}).on("mouseleave",".nav-list li", function() { //pc导航下拉隐藏
    $(this).find(".dropdown").hide();
}).on("click",".mobile-nav li .open", function() { //移动导航下拉显示
    $(this).parent().find(".dropdown").toggleClass("hide");
}).on("click",".mobile-nav .close", function() { //移动导航隐藏
    $(".mobile-nav").slideUp();
}).on("click",".nav-i", function() { //移动导航显示
    $(".mobile-nav").slideDown();
}).on("click", ".footer-box li h4", function() { //移动底部
    $(this).parent().find(".dropdown").toggleClass("block")
}).on("click", ".footer-box .open", function() {
    $(".footer-box").find(".ewm-box").toggleClass("block")
})
/*
* 产品页
*/
.on("click", ".pro-nav a", function() { //产品页切换
    $(this).addClass("on").siblings().removeClass("on");
    $(".pro-title").text($(this).text())
    $(".product-list").hide().eq($(this).index()).show()
}).on("click", ".login .off", function() { //经销商登录记住密码
    $(this).hide().next().show()
}).on("click", ".login .on", function() { //经销商登录不记住密码
    $(this).hide().prev().show()
})

