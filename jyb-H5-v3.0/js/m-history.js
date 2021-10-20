$(function() {

    var curNav, isEditor = false;

    $(document).on("click", ".history-header-btn", handleBtnClick) // 编辑 or 完成
        .on("click", ".history-nav ._li", handleHistoryNav) // 编辑 or 完成
        .on("click", ".history-radio.select-all", handleSelectAll) // 全选
        .on("click", ".history-radio.select-single", handleSelectSingle) // 单选
        .on("click", ".history-fixed-bottom .all", bottomSelectAll) // 底部全选
        .on("click", ".history-fixed-bottom .del", bottomDelete) // 删除

    // 编辑 btn click
    function handleBtnClick() {
        var _this = $(this),
            _txt = _this.attr("data-txt"),
            _text = _this.text();
        _this.attr("data-txt", _text);
        _this.text(_txt);

        if (!isEditor) {
            handleEditor(_this);
        } else {
            handleCancle(_this);
        }
    }
    // 处理 编辑事件
    function handleEditor(_this) {
        isEditor = true;
        $(".history-items").animate({
            marginLeft: "50px"
        }, 300, function() {
            $(".history-items").css("overflow", "visible");
            $(".history-blank").show();
        });
    }
    // 处理完成事件
    function handleCancle(_this) {
        isEditor = false;
        $(".history-items").animate({
            marginLeft: "0px"
        }, 300, function() {
            $(".history-items").css("overflow", "hidden");
            $(".history-radio").removeClass("active"); // radio 重置
            $(".history-blank").hide();
        });
    }

    // 处理 机构/课程 tab change
    function handleHistoryNav() {
        var _this = $(this),
            _idx = _this.index(),
            _listCon = $(".history-list--con");
        _this.addClass("active").siblings().removeClass("active");
        _listCon.hide().eq(_idx).show();

        if (isEditor) {
            $(".history-header-btn").click();
        }
    }

    // 处理全选
    function handleSelectAll() {
        var _this = $(this),
            isActive = _this.hasClass("active"),
            historyItems = _this.parents(".history-items"),
            radios = historyItems.find(".history-radio.select-single");
        console.log(radios.length);
        if (isActive) {
            _this.removeClass("active");
            radios.removeClass("active");
        } else {
            _this.addClass("active");
            radios.addClass("active");
        }

        isBottomSelectAll();
    }
    // 处理单选
    function handleSelectSingle() {
        var _this = $(this),
            isActive = _this.hasClass("active"),
            historyItems = _this.parents(".history-items"),
            radios = historyItems.find(".history-radio.select-single"),
            selectAll = historyItems.find(".history-radio.select-all");
        if (isActive) {
            _this.removeClass("active");
        } else {
            _this.addClass("active");
        }
        var singleActives = historyItems.find(".select-single.active");
        console.log(radios.length, singleActives.length);
        if (singleActives.length > 0 && radios.length == singleActives.length) {
            selectAll.addClass("active");
        } else {
            selectAll.removeClass("active");
        }

        isBottomSelectAll();
    }

    // 处理页面底部 全选
    function bottomSelectAll() {
        var _this = $(this),
            _radio = _this.find(".history-radio"),
            _isActive = _radio.hasClass("active"),
            listCon = $(".history-list--con:visible"),
            radios = listCon.find(".history-radio");
        console.log(listCon);
        if (_isActive) {
            _radio.removeClass("active");
            radios.removeClass("active");
        } else {
            _radio.addClass("active");
            radios.addClass("active");
        }
    }
    // 是否为全选的状态
    function isBottomSelectAll() {
        var bottomRadio = $(".history-fixed-bottom .history-radio"),
            listCon = $(".history-list--con:visible"),
            radios = listCon.find(".history-radio"),
            radioActives = listCon.find(".history-radio.active");
        if (radioActives.length > 0 && radios.length == radioActives.length) {
            bottomRadio.addClass("active");
        } else {
            bottomRadio.removeClass("active");
        }
    }

    // 处理删除的操作
    function bottomDelete() {
        var listCon = $(".history-list--con:visible"),
            radioActives = listCon.find(".select-single.active");
        if (radioActives && radioActives.length > 0) {
            // 删除的操作
            console.log("删除------");
            console.log(radioActives);
        } else {
            $.tips({
                info: '请至少选择一条记录', // 提示内容
                delayTime: 2, // 默认2(s)后关闭
                complete: function() { // 提示关闭后，需要执行的逻辑(根据需求来定)
                    console.log("已提示~~")
                }
            })
        }
    }
})