// 服务人数
var nowaday = new Date().getTime() - new Date("2019/12/10 08:00:00").getTime();
var thisLength = $(".serve-number").length;
let dayth = Math.floor(nowaday / (24 * 3600 * 1000));
let leave1 = nowaday % (24 * 3600 * 1000);
let dayth_hour = Math.floor(leave1 / (3600 * 1000));
// 每天12.5个小时 增加125人 每小时增加10人
for (let i = 0; i < thisLength; i++) {
    let tip = parseInt($(".teacher-item-intro").eq(i).find(".serve-number").text()) + 125 * dayth + 10 * dayth_hour;
    $(".teacher-item-intro").eq(i).find(".serve-number").text(tip);
}