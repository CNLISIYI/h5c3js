$(function() {
    /**
     * select
     */
    var cityarr = [{
        label: '济南',
        value: 'jn',
        children: [{
            label: '大明湖',
            value: 'daminghu',
        }, {
            label: '千佛山',
            value: 'qianfoshan',
        }]
    }, {
        label: '北京',
        value: 'bj',
        children: [{
            label: '朝阳区',
            value: 'chaoyang',
        }, {
            label: '昌平区',
            value: 'changping',
        }]
    }];

    $(document).on("click", ".m-location-city", function() { // 切换城市，选择区域、商圈
        $(".m-location-change-cur").show().siblings(".m-location-based-cur").hide();
    }).on("click", ".m-location-cur-reset", function() { // 重新定位
        $.loading({
            info: "定位中"
        })

        // 重定位成功之后
        setTimeout(function() {
            $.loadingRemove();
        }, 2000);
    }).on("click", ".m-location-area li a", function() { // 选择位置：点击区，切换商圈显示
        var _this = $(this),
            _par = _this.parent('li'),
            _idx = _par.index(),
            _placearr = $(".m-location-place-container .m-location-place");
        if (_placearr.length > _idx) {
            _par.addClass("active").siblings().removeClass("active");
            _placearr.hide().eq(_idx).show();
        }
    }).on("click", ".m-location-picker", function() { // select 选择器
        setTimeout(function() {
            weui.picker(cityarr, {
                depth: 2,
                defaultValue: ['jn', 'qianfoshan'],
                onChange: function onChange(result) {

                },
                onConfirm: function onConfirm(result) {
                    //console.log(result)
                    $(".m-location-select-area .m-location-name").text(result[0].label).attr("data-name", result[0].value);
                    $(".m-location-select-place .m-location-name").text(result[1].label).attr("data-name", result[1].value);
                    $(".m-location-select-btn").attr("href", "/" + result[0].value + "/" + result[1].value);
                },
                id: 'cascadePicker'
            });
        }, 200);
    })

    /**
     * search
     */
    $(document).on("input", '.m_header_input', function() { // 输入
        var $this = $(this),
            $val = $this.val(),
            $list = $('.m-search-result-list'),
            liststr = ''; // 实时查询,数据列表
        if ($.trim($val) != '') {

            // 输入内容 请求数据 渲染查询列表
            liststr = renderQueryList($.trim($val));
            $list.html(liststr).show();
        } else {
            $list.html('').hide();
        }
    }).on("input", '.m_header_input', function() { // 判断输入框是否由内容
        var _this = $(this),
            _val = $.trim(_this.val());
        if (_val != '') {
            $(".m-search-btn-query").show().siblings(".m-search-btn-cancel").hide();
        } else {
            $(".m-search-btn-query").hide().siblings(".m-search-btn-cancel").show();
        }
    }).on("click", '.m-search-history-del', function() { // 删除历史搜索记录
        $.confirm({
            content: "确认删除全部历史记录？",
            confirm: () => {
                console.log("确认删除");
                // 请求删除接口

                // 成功之后
                $('.m-search-history').hide().find('ul').html('');
            },
            cancel: () => {
                console.log("取消删除");
            },
        })
    })

    // 请求数据
    function renderQueryList(val) {
        var _str = '';
        // jQuery.ajax({
        //     url: '/path/to/file',
        //     type: 'POST',
        //     dataType: 'xml/html/script/json/jsonp',
        //     data: {

        //     },
        //     beforeSend: function() {

        //     },
        //     complete: function(xhr, textStatus) {

        //     },
        //     success: function(data, textStatus, xhr) {
        //         for(var i = 0,len = data.length; i < len; i++){
        //             var newitem = data[i].label.replace(new RegExp(`${val}`, 'g'), `<span>${val}</span>`);
        //             _str += '<li class="flex-box">'+
        //                         '<img src="../img/list-search.svg" alt="">'+
        //                         '<a class="flex-1 ellipsis-1" href="'+ data[i].href +'">'+ newitem +'</a>'+
        //                     '</li>';
        //         }
        //         return _str;
        //     },
        //     error: function(xhr, textStatus, errorThrown) {
        //         return _str;
        //     }
        // })
        var data = [{
                label: '0基础雅思',
                href: 'javascript:;'
            }, {
                label: '出国留学雅思',
                href: 'javascript:;'
            }, {
                label: '成人雅思',
                href: 'javascript:;'
            }, {
                label: '1对1雅思',
                href: 'javascript:;'
            }, {
                label: '雅思',
                href: 'javascript:;'
            }, {
                label: '基础雅思培训',
                href: 'javascript:;'
            }, {
                label: '雅思进阶',
                href: 'javascript:;'
            }],
            val = '雅思';
        for (var i = 0, len = data.length; i < len; i++) {
            var newitem = data[i].label.replace(new RegExp(val, 'g'), '<span>' + val + '</span>');
            _str += '<li class="flex-box">' +
                '<a class="flex-1 ellipsis-1" href="' + data[i].href + '">' + newitem + '</a>' +
                '</li>';
        }
        return _str;
    }

})