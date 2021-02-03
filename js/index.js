$(".hamburger-icon").on("click", function () {
    $(this).toggleClass("active")
    if($(this).hasClass("active")){
        $(this).attr("aria-expanded", "true")
    }
    else{
        $(this).attr("aria-expanded", "false")
    }
    $(".line").each(function () {
        $(this).toggleClass("menu-clicked")
    })
    $(".navigation-social").toggleClass("nav-swiped")
    $(".navigation-top").toggleClass("nav-swiped")
})

