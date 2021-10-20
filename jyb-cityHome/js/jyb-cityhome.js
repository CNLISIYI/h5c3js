/*
 * 首页 
 */

$(function () {
    // banner图
    // var index = 0;
    // var timer;
    // var bg_colorArr = ['#66bcff', '#f85646', '#fe9520', '#1687ef']; // 背景颜色色值数组
    // $(document).on("mouseenter", ".banner-circle img", function () {
    //     let newSrc = $(this).attr("src").replace("page", "page-hover");
    //     $(this).attr("src", newSrc);
    // }).on("mouseleave", ".banner-circle img", function () {
    //     let newSrc = $(this).attr("src").replace("page-hover", "page");
    //     $(this).attr("src", newSrc);
    // }).on("mouseenter", ".circle-button-outer", function () {
    //     let newSrc = $(this).next().attr("src").replace("page", "page-hover");
    //     $(this).next().attr("src", newSrc);
    // }).on("mouseleave", ".circle-button-outer", function () {
    //     let newSrc = $(this).next().attr("src").replace("page-hover", "page");
    //     $(this).next().attr("src", newSrc);
    // }).on("click", ".arrow-right", function () {
    //     bannerToRight();
    //     resetCircleLoading();
    // }).on("click", ".arrow-left", function () {
    //     bannerToLeft();
    //     resetCircleLoading();
    // })
    // $(".banner-images li").css("background", bg_colorArr[0]);
    // bannerTimeOut();
    // // 向前切换
    // function bannerToLeft() {
    //     index--;
    //     if (index < 0) {
    //         index = $(".banner-images li").length - 1;
    //     }
    //     $(".banner-images li").css("background", bg_colorArr[index]);
    //     $(".banner-images li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    //     $(".arrow-mid").text(`${index+1}/${$(".banner-images li").length}`)
    //     clearInterval(timer);
    // }
    // // 向后切换
    // function bannerToRight() {
    //     index++;
    //     if (index >= $('.banner-images li').length) {
    //         index = 0;
    //     }
    //     $(".banner-images li").css("background", bg_colorArr[index]);
    //     $(".banner-images li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
    //     $(".arrow-mid").text(`${index+1}/${$(".banner-images li").length}`);
    //     clearInterval(timer);
    // }
    // // 切换按钮loading效果
    // function bannerTimeOut() {
    //     if (timer) {
    //         clearInterval(timer);
    //     }
    //     $(".circle-button").find(".circleProgress").addClass("load-animation")
    //     timer = setInterval(() => {
    //         $(".circle-button").find(".circleProgress").removeClass("load-animation")
    //         bannerToRight()
    //         bannerTimeOut()
    //     }, 6000);
    // }
    // // 重置loading效果
    // function resetCircleLoading() {
    //     $(".circle-button").find(".circleProgress").removeClass("load-animation")
    //     setTimeout(() => {
    //         bannerTimeOut()
    //     }, 100);
    // }
    

})

