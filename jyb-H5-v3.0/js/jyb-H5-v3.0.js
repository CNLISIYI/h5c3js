$(function() {
    // 免费选课 弹层 select 选择框
    var cityarr = [{
        label: '广东',
        value: "guangdong",
        children: [{
            label: '广州',
            value: "guangzhou",
        }, {
            label: '佛山',
            value: "foshan",
        }, {
            label: '海珠',
            value: "zhuhai"
        }, {
            label: '番禺',
            value: "fanyu"
        }, {
            label: '禅城',
            value: "shancheng"
        }, {
            label: '南海',
            value: "nanhai"
        }]
    }, {
        label: '广西',
        value: "guangxi",
        children: [{
            label: '南宁',
            value: "nanning",
        }, {
            label: '桂林',
            value: "guilin",
        }, {
            label: '青秀',
            value: "qingxiu"
        }, {
            label: '兴宁',
            value: "xingning"
        }, {
            label: '象山',
            value: "xiangshan"
        }, {
            label: '秀峰',
            value: "xiufeng"
        }]
    }]

    $(document).on("click", ".m-pop-input-city", function() {
        var _this = $(this);
        weui.picker(cityarr, {
            depth: 2,
            defaultValue: ["guangdong", "fanyu"],
            onChange: function onChange(result) {
                console.log(result);
            },
            onConfirm: function onConfirm(result) {
                console.log(result);
                _this.val(result[1].label);
            },
            id: 'cascadePicker'
        });
    })

    /**
     * index or list
     */
    var timer;
    function yanTimer() {
        var codeTime = 60;
        if (timer) {
            clearInterval(timer);
        }
        timer = setInterval(function () {
            $('.m-recommend-getcode').attr("disabled",true).addClass('after-send').text(codeTime + 's后重发');
            codeTime--;
            if (codeTime < 0) {
                codeTime = 60;
                $('.m-recommend-getcode').removeClass('after-send').text('发送验证码');
                clearInterval(timer);
            }
        }, 1000)
    }
    $(document).on("click", ".m-header-menu", function() { // 下拉导航
        $.menu();
    }).on("click", ".m-nearby-modify", function() { // 切换定位 show
        $.overHidden();
        $(".jyb-location-fixed").show();
        $('.jyb-location-change').animate({
            right: 0
        }, 300);
    }).on("click", ".jyb-location-mask", function() { // 切换定位 hide
        $('.jyb-location-change').animate({
            right: "-100%"
        }, 300, function() {
            $(".jyb-location-fixed").hide();
            $.overAuto();
        });
    }).on("click", '.m-list_index-nearby-close', function() { // 附近机构模块 关闭
        $('.m-list_index-nearby').animate({
            "height": "0",
            "padding": "0"
        }, 300, function() {
            $(".m-list_index-nearby").html('').remove();
        });

    }).on("click", ".m-choose-class-link", function() { // index 免费帮我选课
        $('.m-pop-choose-class').show();
        $('.m-pop-choose-class').animate({
            top: "48px"
        }, 300, function() {
            $('.m-common-mask').show();
            $('.m-common-mask .icon_down_thin_no_bg').show();
        });
    }).on("click", ".m-common-mask, .m-common-mask .icon_down_thin_no_bg", function() { // index 免费帮我选课
        $('.m-common-mask .icon_down_thin_no_bg').hide();
        $('.m-pop-choose-class').animate({
            top: "100vh"
        }, 300, function() {
            $('.m-common-mask').hide();
            $('.m-pop-choose-class').hide();
        });
    }).on("click", ".m-common-mask, .m-recommend-class-bg .icon_cross_linear", function() {
        $('.m-common-mask').hide();
        $('.m-common-mask .icon_down_thin_no_bg').hide();
        $(".m-pop-recommend-bg").hide();
    }).on("click", ".m-recommend-class-btn", function() {
        if($(".m-recommend-inputbox").is(":hidden")){
            $(".m-recommend-inputbox").show();
        }
        else {
            if(!(/^1[3456789]\d{9}$/.test($('.inputbox-phone input').val()))) {
                $.tips({
                    info: '请正确输入手机号',
                    delayTime: 2, 
                    complete: function() { 
                    }
                })
            }
            else if($('.inputbox-code input').val() == '') {
                $.tips({
                    info: '请输入验证码',
                    delayTime: 2, 
                    complete: function() { 
                    }
                })
            }
            else {
                // 选课成功后的交互
                
            }
        }
    }).on("click", ".m-recommend-class-list a", function() {
        $(this).addClass('active').siblings().removeClass('active');
    }).on("click", ".m-recommend-getcode", function() {
        var phoneNum = $('.inputbox-phone input').val();
        if(!(/^1[3456789]\d{9}$/.test(phoneNum))) {
            $('.apply-error').fadeIn().find('span').text('请输入正确的手机号');
            errorFlag();
        }
        else {
            // 调用短信接口

            yanTimer();
        }
    })

    /**
     * list
     */
    $(document).on("click", ".m-list-change-category, .m-list-change-business, .m-list-change-sort, .m-list-change-sift", function() { // 机构列表切换商圈/类别
        $.overHidden();
        $(".m-common-main").scrollTop(0);
        $(".m-list_pop").hide();
        var _this = $(this),
            _childClass = _this.attr("data-class"),
            _hasActive = _this.hasClass("active");
        if (_hasActive) {
            _this.removeClass("active");
            $("." + _childClass).hide();
            $.overAuto();
        } else {
            _this.addClass("active").siblings().removeClass("active");
            $("." + _childClass).show();
        }
    }).on("click", '.m-list_pop-business .m-category-middle li', function() { // 商圈弹层--选择商圈
        console.log($(this));
        // 处理选择之后的逻辑

        $.overAuto();
    }).on("click", '.m-list_pop-category .m-category-right li', function() { // 类别弹层--选择课程类别
        console.log($(this));
        // 处理选择之后的逻辑

        $.overAuto();
    }).on("click", '.m-list_pop-sort .m-category-left li', function() { // 排序弹层
        console.log($(this));
        // 处理选择之后的逻辑

        $.overAuto();
    }).on("click", '.m-list_pop-sift .m-category-sift li', function() { // 筛选弹层
        console.log($(this));
        // 处理选择之后的逻辑

        
    }).on("click", '.m-list_pop', function(e) { // 右侧抽屉弹层--选择商圈
        $(this).hide();
        $(".m-tab-top-right > li").removeClass("active");
        $.overAuto();
    }).on("click", '.m-list_pop .m-list_pop-inner', function(e) { // 右侧抽屉弹层--选择商圈
        return false;
    }).on("click", '.jyb-location-select .m-category-middle li', function() { // 右侧抽屉弹层--选择商圈
        console.log($(this));
        // 处理选择之后的逻辑

        $.overAuto();
    })


    /**
     * feedback
     */
    $(document).on("click", ".m-feedback-btn", function() {
        // 提交之前，判断输入内容的正确性

        $.loading({
            info: "正在提交"
        })

        // 提交成功之后显示
        setTimeout(function() {
            $.loadingRemove();
            $(".m-feedback-success").show();
        }, 2000);
    }).on("click", ".m-feedback-return", function() {
        $(".m-feedback-success").hide();
    })

    /**
     * category
     */
    $(document).on("click", ".m-category-left li", function() { // 点击一级菜单
        // 一级菜单
        var firstIdx = $(this).index();
        var _par = $(this).parents(".m-list_pop");
        $(this).addClass("active").siblings().removeClass("active");
        _par.find(".m-category-middle ul").eq(firstIdx).show().siblings().hide();
        // 二级菜单，默认选择第一项
        _par.find(".m-category-middle li").removeClass("active");
        _par.find(".m-category-middle ul").eq(firstIdx).find("li:first").addClass("active");
        // 三级菜单
        _par.find(".m-category-right-item, .m-category-right-item ul").hide();
        _par.find(".m-category-right-item").eq(firstIdx).show().siblings(".m-category-right-item").hide();
        _par.find(".m-category-right-item").eq(firstIdx).find("ul:first").show();
    }).on("click", ".m-category-middle ul li", function() { // 点击二级菜单
        // 二级菜单
        var secondIdx = $(this).index();
        var _par = $(this).parents(".m-list_pop");
        $(this).addClass("active").siblings().removeClass("active");
        // 三级菜单
        _par.find(".m-category-right-item:visible ul").eq(secondIdx).show().siblings().hide();
    });
     /**
     * sift
     */
    $(document).on("click", ".m-category-sift li", function() { // 点击筛选
        if($(this).attr("class") == "active") {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    }).on("click", ".clear-sift", function() { // 清空筛选
        $(".m-category-sift li").removeClass("active");
    }).on("click", ".done-sift", function() { // 完成筛选
        $(".m-list_pop-sift").hide();
        $.overAuto();
    });
    /**
     * new-category
     */
    $(document).on("click", ".new-category-left a", function() {
        var _items = $(".new-category-right"),
            _this = $(this),
            _idx = _this.index();
        _this.addClass("active").siblings().removeClass("active");
        if (_idx < _items.length) {
            _items.hide().eq(_idx).show();
        }
    })
})