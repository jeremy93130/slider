$(function () {

    var slideIndex = 1;

    $(function () {

        $('.point').click(function () {
            var buttons = ($(this).index())
            $('.slider').animate({
                left: -(buttons * 100) + "%"

            }, 1000)
        })

    })

    $(".right-arrow").click(function () {
        $(".slider").index() < 1 ?
            $(".slider").animate({
                left: ("-100%" * $(".slider").index().length) 
            }) 
        : console.log("va chier")    
    })




})

