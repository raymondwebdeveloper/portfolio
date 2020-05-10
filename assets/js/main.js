$(function () {
    $(".theme-btn").click(function () {
        console.log("hovered in");
        $(this).addClass('active');
    });

    $(".theme-btn").mouseleave(function () {
        console.log("hovered out");
        $(this).removeClass('active');
    });
});