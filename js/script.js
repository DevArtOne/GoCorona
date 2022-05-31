"use strict";




$(function () {


    // scroll fixed header=======================================
    let header = $("#header");
    let home = $("#home");
    let homeH = home.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav")
    let menuToggle = $("#menuToggle")

    checkScroll(scrollPos, homeH)

    $(window).on("scroll resize", function () {

        homeH = home.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, homeH)
    });


    function checkScroll(scrollPos) {
        if (scrollPos > 0) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        if (scrollPos > 0) {
            document.querySelector(".header__container").style.minHeight = "58px"
        } else {
            document.querySelector(".header__container").style.minHeight = "114px"
        }



    }
    // click on header menu==================================

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700)

    });

    // navToggle==================================================

    menuToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

});



