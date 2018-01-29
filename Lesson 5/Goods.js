function Goods(id, title, price) {
    Container.call(this, id);
    this.title = title; // Название товара
    this.price = price; // Цена тоавара
}

Goods.prototype = Object.create(Container.prototype);
Goods.prototype.constructor = Goods;

/**
 * Метод создаёт структуру товара.
 * @param jQuerySelector
 */

Goods.prototype.render = function (jQuerySelector) {
    var $goodsContainer = $('<div />', {
        class: "goods"
    });

    var $goodsTitle = $('<p />', {
        text: this.title
    });

    var $goodsPrice = $('<p>Цена: <span class="goodsPrice">' + this.price + '</span>руб.</p>');

    var $goodsBuyBtn = $('<button />', {
        'data-id': this.id,
        text: "Купить",
        class: "buyGoods"
    });

    var $goodsDeleteBtn = $('<button />', {
        'data-id': this.id,
        text: "Удалить",
        class: "deleteGoods"
    });

    $goodsTitle.appendTo($goodsContainer);
    $goodsPrice.appendTo($goodsContainer);
    $goodsBuyBtn.appendTo($goodsContainer);
    $goodsDeleteBtn.appendTo($goodsContainer);

    jQuerySelector.append($goodsContainer);
};