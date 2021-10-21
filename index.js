$(function () {
    var index = 0

    $('.point').click(function () {
        index = ($(this).index());
        $('.slider').animate({
            left: -(index * 100) + "%"

        }, 1000)
    })

    $(".arrow").click(function () {
        if ($(this).hasClass("left-arrow")) {
            // index = (index -1 + 5 = 4 ) % 5 = Le reste est égal à 0 donc il retourne à l'index 4 
            index = (index + 4) % 5
            $('.slider').animate({
                left: `-${(index * 100)}%`
            }, 1000)
        } else if ($(this).hasClass("right-arrow")) {
            index = (index + 1) % 5
            $('.slider').animate({
                left: `-${(index * 100)}%`

            }, 1000)
        }

    })

    setInterval(autoSlide, 5000)

    function autoSlide() {
        index = index + 1

        if (index > 4) {
            index = 0
        }
        $('.slider').animate({
            left: `-${(index * 100)}%`
        })
        randomImages()
    }


    function randomImages() {
        $(".slide:nth-child()").each(function () {
            $(this).css({
            backgroundImage: "url(https://picsum.photos/1600/900)"
        })
        })
    }


})

