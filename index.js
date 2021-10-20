$(function () {

    $(function () {

        $('.point').click(function () {
            var buttons = ($(this).index())
            $('.slider').animate({
                left: -(buttons * 100) + "%"

            }, 1000)
        })

    })


    $(".right-arrow").click(function (num) {
        num = num + $(this).index()
        var arrow = ($(this).index())
        $("slider").animate({
            left: arrow * num
        })
    })




})

