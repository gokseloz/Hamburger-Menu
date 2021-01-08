$(".hamburger-icon").on("click", function () {
    $(".line").each(function () {
        $(this).toggleClass("menu-clicked")
    })
    $(".navigation-social").toggleClass("nav-swiped")
    $(".navigation-top").toggleClass("nav-swiped")
})

