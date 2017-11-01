$.fn.scrollList = function (delay) {
    delay = delay || 5000;
    var animateList = function ($list) {
        //get first child
        var $first = $list.children('li:first');
        var width = $first.outerWidth(true);
        //animate first two off the screen
        $first.animate({
            'margin-left': $list.width() * -1
        },
        // on animation complete
        function () {
            //reset and move to the end of the list
            $(this).css('margin-left', 0).add($(this).next()).appendTo($list);
            //start again after delay
            setTimeout(function () {
                animateList($list)
            }, delay);
        });
    };

    return this.each(function () {
        var $that = $(this)
        setTimeout(function () {
            animateList($that);
        }, delay);
    });

};

$('.container ul').scrollList();