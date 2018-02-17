function Numbers() {
    this.currentNumber = 0;
}

Numbers.prototype.render = function (jQuerySelector) {
    $container = $('<div />', {
        class: 'amount'
    });

    $current = $('<p />', {
        text: 'Текущий активный элемент: ' + this.currentNumber
    });

    $current.appendTo($container);
    jQuerySelector.append($container);
};

Numbers.prototype.refresh = function () {
    var $slides = $('.slider .slide');
    for (var i = 0; i < $slides.length; i++) {
        if ($slides.eq(i).hasClass('active') === true) {
            this.currentNumber = i+1;
        }
    }
    var $container = $('.amount');
    $container.empty();
    $container.append('<p>Текущий активный элемент: ' + this.currentNumber + '</p>');
};



$(document).ready(function () {
    var $slides = $('.slider .slide');
    var $btnLeft = $('#btnLeft');
    var $btnRight = $('#btnRight');
    var ACTIVE_CLASS = 'active';

    $slides.not('.' + ACTIVE_CLASS).hide();

    var amount = new Numbers();
    amount.render($('.answer'));

    $btnLeft.on('click', function () {
        if($slides.filter('.' + ACTIVE_CLASS).prev().hasClass('slide')) {
            $slides
                .filter('.' + ACTIVE_CLASS)
                .removeClass(ACTIVE_CLASS)
                .fadeOut(500, function () {
                    $(this).prev()
                        .addClass(ACTIVE_CLASS)
                        .fadeIn(500);
                    amount.refresh();
                });
        } else {
            /*console.log('No slides (left)');*/
        }
    });

    $btnRight.on('click', function () {
        if($slides.filter('.' + ACTIVE_CLASS).next().hasClass('slide')) {
            $slides
                .filter('.' + ACTIVE_CLASS)
                .removeClass(ACTIVE_CLASS)
                .fadeOut(500, function () {
                    $(this).next()
                        .addClass(ACTIVE_CLASS)
                        .fadeIn(500);
                    amount.refresh();
                });
        } else {
            /*console.log('No slides (right)');*/
        }
    });
});