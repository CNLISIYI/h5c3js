/*
 * 我也来说说 h5
 */
var areaLength = 0,
    nameLength = 0,
    phoneLength = 0,
    codeLength = 0,
    phoneNumber = '';
$(document).on("keyup", ".list-textarea textarea", function () { //textarea输入事件
    areaLength = $(this).val().length;
    if (areaLength == 0) {
        $(".text-holder").text("60个字内").removeClass("color-red");
    } else if (areaLength > 60) {
        $(".text-holder").text(`您已超出字数限制！${areaLength}/60`).addClass("color-red")
    } else {
        $(".text-holder").text(`${areaLength}/60`).removeClass("color-red")
    }
    isSubmitOk();
}).on("keyup", ".user-name input", function () { //称呼输入事件
    nameLength = $(this).val().length;
    isSubmitOk();
}).on("keyup", ".before-send input", function () { //手机号输入事件
    phoneLength = $(this).val().length;
    phoneNumber = $(this).val();
    isSubmitOk();
}).on("keyup", ".user-code input", function () { //验证码输入事件
    codeLength = $(this).val().length;
    isSubmitOk();
}).on("click", ".send-yan", function () { //提交表单
    if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
        $.tips({
            info: '请正确输入手机号',
            delayTime: 2,
            complete: function () {}
        })
    } else {
        // 调用发短信接口
        // 调用成功：

        // 倒计时定时器
        // $(this).addClass("unclick").attr("disabled", true);
        // yanTimer();
    }
}).on("click", ".apply-submit a", function () {
    if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
        $.tips({
            info: '请正确输入手机号',
            delayTime: 2,
            complete: function () {}
        })
    } else {
        // 调用验证短信验证码接口
        // 验证成功：
            // 调用提交表单接口
            // 提交成功：
                $.msg({
                    type: "success", // success or error
                    info: '', // info 为空时不显示
                    confirmText: '确定',
                    confirm: () => {
                        $(".list-textarea textarea").val("")
                        for (let i = 0; i < document.querySelectorAll(".item-input").length; i++) {
                            $(".item-input").eq(i).find("input").val("");
                        }
                        $(".apply-submit a").attr("disabled", "true").addClass("sub-disabled")
                    },
                })

            // 提交失败：
                // $.tips({
                //     info: '提交失败，请重新提交',
                //     delayTime: 2,
                //     complete: function () {}
                // })

        // 验证失败：
            // $.tips({
            //     info: '请正确输入验证码',
            //     delayTime: 2,
            //     complete: function () {}
            // })
    }
})
// 判断提交按钮是否禁用
function isSubmitOk() {
    if (nameLength > 0 && phoneLength == 11 && codeLength > 0) {
        $(".apply-submit a").attr("disabled", "false").removeClass("sub-disabled")
    } else {
        $(".apply-submit a").attr("disabled", "true").addClass("sub-disabled")
    }
}