/**
 * select-interest
 */
//html
var htmlstr = `<div class="m-common-container m-select-interest flex-box-column">
        <!-- 通用头部 -->
        <header class="m-common-header">
            <div class="m-interest-header">
                <div class="m-interest-header-title flex-box">
                    <span class="flex-1">选择您感兴趣的知识</span>
                    <a href="javascript:;" class="m-close-interest">跳过</a>
                </div>
                <span class="m-interest-header-tips">精准推荐合适的机构</span>
            </div>
        </header>
        <main class="m-common-main flex-1">
            <div class="m-interest-list">
                <dl class="m-interest-blue">
                    <dt>艺术·兴趣</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">瑜伽</a>
                        <a href="javascript:;">舞蹈</a>
                        <a href="javascript:;">乐器</a>
                        <a href="javascript:;">跆拳道</a>
                        <a href="javascript:;">书法绘画</a>
                        <a href="javascript:;">体育竞技</a>
                        <a href="javascript:;">科技</a>
                    </dd>
                </dl>
                <dl class="m-interest-red">
                    <dt>学前·小学</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">早教</a>
                        <a href="javascript:;">少儿英语</a>
                        <a href="javascript:;">幼小衔接</a>
                        <a href="javascript:;">小学辅导</a>
                        <a href="javascript:;">冬/夏令营</a>
                    </dd>
                </dl>
                <dl class="m-interest-green">
                    <dt>初中·高中</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">初中</a>
                        <a href="javascript:;">高中</a>
                        <a href="javascript:;">艺考</a>
                        <a href="javascript:;">高中复读</a>
                        <a href="javascript:;">特色辅导</a>
                        <a href="javascript:;">自主招生考试</a>
                    </dd>
                </dl>
                <dl class="m-interest-yellow">
                    <dt>语言·留学</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">雅思</a>
                        <a href="javascript:;">托福</a>
                        <a href="javascript:;">小语种</a>
                        <a href="javascript:;">留学</a>
                        <a href="javascript:;">英语</a>
                        <a href="javascript:;">国际课程</a>
                        <a href="javascript:;">国际学校</a>
                        <a href="javascript:;">艺术作品集</a>
                    </dd>
                </dl>
                <dl class="m-interest-brown">
                    <dt>资格·考证</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">会计</a>
                        <a href="javascript:;">建筑</a>
                        <a href="javascript:;">医卫</a>
                        <a href="javascript:;">教师资格证</a>
                        <a href="javascript:;">公务员</a>
                        <a href="javascript:;">心理咨询师</a>
                        <a href="javascript:;">人力资源管理师</a>
                    </dd>
                </dl>
                <dl class="m-interest-purple">
                    <dt>就业·技能</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">化妆</a>
                        <a href="javascript:;">设计</a>
                        <a href="javascript:;">IT</a>
                        <a href="javascript:;">餐饮</a>
                        <a href="javascript:;">中医</a>
                        <a href="javascript:;">办公软件</a>
                        <a href="javascript:;">技工/维修</a>
                        <a href="javascript:;">母婴护理</a>
                        <a href="javascript:;">幼教</a>
                    </dd>
                </dl>
                <dl class="m-interest-lightgreen">
                    <dt>职场·提升</dt>
                    <dd class="clearfloat">
                        <a href="javascript:;">专升本</a>
                        <a href="javascript:;">成考</a>
                        <a href="javascript:;">考研</a>
                        <a href="javascript:;">拓展训练</a>
                        <a href="javascript:;">学历教育</a>
                        <a href="javascript:;">企业管理</a>
                    </dd>
                </dl>
            </div>
        </main>
        <footer class="m-common-footer">
            <div class="m-interest-btns flex-box">
                <span class="m-interest-btn-msg flex-1"><i>0</i>/6 已选<i>0</i>个兴趣</span>
                <a class="m-interest-btn-yes" href="javascript:;">选好了</a>
            </div>
        </footer>
    </div>`;
$("body").append(htmlstr);
//js
var selectInterestNum = 0;
$(document).on("click", ".m-interest-list dd a", function() { // 选择兴趣
    var _this = $(this),
        _isActive = _this.hasClass("active");
    if (_isActive) {
        _this.removeClass("active");
        selectInterestNum--;
    } else {
        if (selectInterestNum >= 6) {
            // 提示
            $.tips({
                downToUp: false, // true: down-to-up 动画，false:只显示
                info: '最多能选择6个兴趣', // 提示内容
            })
        } else {
            _this.addClass("active");
            selectInterestNum++;
        }
    }
    $(".m-interest-btn-msg i").text(selectInterestNum);
}).on("click", ".m-close-interest", function() { // 跳过
    $(".m-select-interest").hide();
}).on("click", ".m-interest-btn-yes", function() { // 选好了
    if (selectInterestNum == 0) {
        // 提示
        $.tips({
            downToUp: false, // true: down-to-up 动画，false:只显示
            info: '请至少选择1个兴趣', // 提示内容
        })
    } else {
        var selected = $(".m-interest-list a.active"),
            params = [];
        for (var i = 0, len = selected.length; i < len; i++) {
            params.push($(selected[i]).prop("href"));
        }
        console.log(params.join(","));
        // 数据保存接口
        // TODO
    }
})