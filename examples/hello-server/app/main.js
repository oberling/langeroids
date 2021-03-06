var Game = require('langeroids/lib/game.js');
var Canvas2dRenderer = require('langeroids/lib/canvas-2d-renderer.js');
var NetworkClient = require('langeroids/lib/network-client.js');

var MainLogic = require('../lib/main-logic.js');

(function() {
    var game = new Game();

    game.addComponent(new Canvas2dRenderer({
        canvas: 'canvas',
        width: 450,
        height: 300
    }));

    game.addComponent(new MainLogic());

    game.addComponent(new NetworkClient({
        IP: 'localhost',
        PORT: 5493
    }));

    game.start();
})();