(function(window){

    var Utils = {
        getRandom: function(min, max){
            return Math.floor(Math.random() * (max - min) + min);
        }
    }

    window.Utils = Utils;
})(window)