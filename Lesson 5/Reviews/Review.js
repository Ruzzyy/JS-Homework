'use strict';

class Review {
    constructor(selector) {
        this.selector = selector;
        this.arrReviews = [];
        $.get({
            url: "./reviews.json",
            dataType: "json",
            context: this,
            success: function (data) {
                for (var i = 0; i < data.reviews.length; i++) {
                    var review = new Container(data.reviews[i].idReview, data.reviews[i].text);
                    this.arrReviews.push(review);
                }
                this.render();
            }
        });
    }

    /**
     * Прорисовка отзыва.
     */

    render() {
        for (var i = 0; i < this.arrReviews.length; i++) {
            this.arrReviews[i].render(this.selector);
        }
    }

    /**
     * Добавление нового отзыва.
     * @param text
     */

    add(text) {
        var review = new Container(5, text);
        review.render(this.selector);
        this.arrReviews.push(review);
    }
}