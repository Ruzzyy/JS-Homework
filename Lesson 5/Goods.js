function Goods(id, title, price) {
    Container.call(this, id);
    this.title = title;
    this.price = price;
}

Goods.prototype = Object.create(Container.prototype);
Goods.prototype.constructor = Goods;

Goods.prototype.render = function(jQuerySelector) {
    var $goodsContainer = $('<div />', {
        class: "goods"
    });
    
    var $goodsTitle = $('<p />', {
        text: this.title
    });
    
    var $goodsPrice = $('<p>Цена: <span class="product_price">' + this.price + '</span> руб.</p>');
    
    var $goodsBtn = $('<button />', {
        class: "buy_goods",
        'data-id': this.id,
        text: 'Купить'
    });
    
    $goodsTitle.appendTo($goodsContainer);
    $goodsPrice.appendTo($goodsContainer);
    $goodsBtn.appendTo($goodsContainer);
    
    $(jQuerySelector).append($goodsContainer);
};