$(function() {

    function App() {};

    $.extend(App.prototype, {
        init: function(domElem, coords, zoom) {
            this._mapEngine = ymaps;
            this._initParams = { coords: coords, zoom: zoom }
            this.domElem = domElem

            // инициализируем инстанс карты
            this._mapEngine.ready(this._initMap.bind(this));
        },

        _initMap: function(coords, zoom) {
            var params = this._initParams;

            this.map = new this._mapEngine.Map("map", {
                center: params.coords,
                zoom: params.zoom
            });

            this.domElem.trigger('init');
        },

        _addPlacemark: function(coords, hint, content) {
            var myPlacemark = new this._mapEngine.Placemark(coords, {
                    hintContent: hint,
                    balloonContent: content
                });

            this.map.geoObjects.add(myPlacemark);
        }
    });

    window.modules = { app: App };

});
