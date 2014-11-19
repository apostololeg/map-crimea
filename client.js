$(function() {
    var app = new window.modules.app();

    // инициаизация
    app.init($('.app'), [45.116751, 34.158592], 9);

    app.domElem.on('init', function() {
        app._addPlacemark([45.116751, 34.158592], 'Крым', 'Привет NAMASTE ;)');
        app._addPlacemark([45.122584, 34.056969], '1', 'пыщь!');
        app._addPlacemark([45.060327, 33.919640], '2', 'добра тебе ^_^');
        app._addPlacemark([44.659871, 33.991051], '3', 'однажды один хороший человек...');
    });
});
