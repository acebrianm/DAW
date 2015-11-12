var createGame = require('voxel-engine');
var createTerrain = require('voxel-perlin-terrain');
var texturePath = require('painterly-textures');
var createPlayer = require('voxel-player')(game);

//Aqui se crea el juego
var game = createGame({
	generateVoxelChunk: createTerrain({scaleFactor:6}),
	chunkDistance: 2,
    texturePath: texturePath,
});

var container = document.getElementById('container');
game.appendTo(container);

window.game = game;

var player = createPlayer('player.png');
player.yaw.position.set(0, 0, 0);
player.possess();

// add some trees
var createTree = require('voxel-forest');
for (var i = 0; i < 20; i++) {
  createTree(game, { bark: 4, leaves: 3 });
}

// create a sky
var time = document.querySelector('#time');
var createSky = require('../')(game);
var sky = createSky(), mysky, oldfn;
game.on('tick', function(dt) {
  mysky = sky(dt);
  time.innerHTML = Math.floor(mysky.time);
});