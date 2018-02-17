'use strict';

class Container {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }

    /**
     * Создание контейнера для отзыва.
     * @param jQuerySelector
     */

    render(jQuerySelector) {
        var $reviewContainer = $('<div />', {
            class: "review"
        });

        var $idReview = $('<p />', {
            text: "ID отзыва: " + this.id
        });

        var $textReview = $('<p />', {
            text: "Текст отзыва: " + this.text
        });

        var $btnApprove = $('<button />', {
            class: "btnApprove",
            text: "Одобрить"
        });

        var $btnDelete = $('<button />', {
            class: "btnDelete",
            text: "Удалить"
        });

        $idReview.appendTo($reviewContainer);
        $textReview.appendTo($reviewContainer);
        $btnApprove.appendTo($reviewContainer);
        $btnDelete.appendTo($reviewContainer);

        jQuerySelector.append($reviewContainer);
    }
}