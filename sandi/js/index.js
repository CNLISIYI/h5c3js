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
}).on("click", ".pagination span", function () { //分页
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
}).on("click", ".pro-nav a", function() { //产品页切换
    $(this).addClass("on").siblings().removeClass("on");
    $(".pro-title").text($(this).text())
    $(".product-list").hide().eq($(this).index()).show()
}).on("click", ".login .off", function() { //经销商登录记住密码
    $(this).hide().next().show()
}).on("click", ".login .on", function() { //经销商登录不记住密码
    $(this).hide().prev().show()
})