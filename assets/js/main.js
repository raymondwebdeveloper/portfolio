$(function () {
    $(".theme-btn").mouseenter(function () {
        console.log("hovered in");
        $(this).addClass('active');
    });

    $(".theme-btn").mouseleave(function () {
        console.log("hovered out");
        $(this).removeClass('active');
    });
});