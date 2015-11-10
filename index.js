var create = require('voxel-engine');

var game = create();
var container  = document.body;
game.appendTo(container);

var player = require('voxel-player')(game);

var dude = player('dude.png');
dude.posses();
dude.yaw.position.set(0, 100, 0);