---
user: sethvincent
path: sethvincent/crtrdg-entity
name: crtrdg-entity
head: a82d6d1c032df4579e7005cc7c6db5641a3e3c88
package:
  name: crtrdg-entity
  version: 1.0.0
  description: entity module for crtrdg games
  main: index.js
  scripts:
    start: budo example.js --live
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-entity.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - requestAnimationFrame
    - game library
    - entity
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    eventemitter2: ^0.4.14
    inherits: ~2.0.0
  devDependencies:
    budo: ^7.0.2
    crtrdg-gameloop: ^1.0.0
    crtrdg-keyboard: 0.0.2
readme: "# crtrdg entity\n> entity module for games\n\n## Goals for the crtrdg gameloop:\n- Serve as a simple entity module that other modules can inherit\n- Emits update and draw events.\n\n## Requirements\n- node.js\n- browserify / beefy\n- crtrdg-gameloop (or possibly another method of animating the canvas with requestAnimationFrame that emits `update` and `draw` events)\n\n## Getting started\nInstall node if you haven't already.\n\n### Install browserify and beefy:\n```\nnpm install -g browserify beefy\n```\n\n### Create an index.html file:\n```\n<!DOCTYPE html>\n<html>\n<head>\n  <title>crtrdg gameloop test</title>\n</head>\n<body>\n\n<canvas id=\"game\"></canvas>\n\n<script src=\"./bundle.js\"></script>\n</body>\n</html>\n```\n\n### Create a game.js file:\n```\n// use crtrdg-gameloop for animating to the canvas with requestAnimationFrame.\nvar Game = require('crtrdg-gameloop');\n\n// require crtrdg-entity\nvar Entity = require('crtrdg-entity');\n\n// require the inherits module so we can make Player inherit from Entity.\nvar inherits = require('inherits');\n\n// initialize the game with the canvas id\n// set the width, height, and default background color of the canvas\nvar game = new Game({\n  canvasId: 'game',\n  width: '800',\n  height: '400',\n  backgroundColor: '#ff1f1f'\n});\n\n// make the Player funtion inherit from crtrdg-entity\ninherits(Player, Entity);\n\n// create Player function\nfunction Player(options){\n  this.position = { \n    x: options.position.x, \n    y: options.position.y \n  };\n\n  this.size = {\n    x: options.size.x,\n    y: options.size.y\n  };\n\n  this.color = options.color\n}\n\n// create instance of Player\nvar player = new Player({\n  position: { x: 10, y: 10 },\n  size: { x: 10, y: 10 },\n  color: '#fff'\n});\n\n// add the player to the game\nplayer.addTo(game);\n\n// listen for update event.\n// here you can do things like change position or watch for keyboard/mouse events\nplayer.on('update', function(interval){\n  console.log(this.position);\n});\n\n// listen for draw event.\n// context is the canvas context, so you can draw on the canvas like usual.\nplayer.on('draw', function(context){\n  context.fillStyle = this.color;\n  context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);\n});\n\n// find an entity with `game.findEntity`, an alias for `Entity.prototype.findEntity`\ngame.findEntity(player, function(exists, entities, index){\n  \n  // returns exists, a boolean,\n  // entities, the full array of entities,\n  // and index, the array index of the entity\n  console.log(exists, entities, index)\n})\n```\n\n## Purpose of `crtrdg`:\nAlmost every javascript game / animation library I've found bundles things like requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods, keyboard/mouse input, vector math, and more into one entangled library. If I don't like how the library handles just one of those components, I'm stuck with dead library weight, and sometimes it's difficult to replace a library's methods.\n\nSo what if each element of 2d games were broken up into it's own modules / repositories?\n\nWith inspiration from voxel.js, crtrdg is a collection of javascript modules used for developing 2d games.\n\nAs I learned more about node.js, the core events module, and browserify, I realized the ideal api for making simple 2d games could be based on node's events module. So you'll see a lot of crtrdg modules exposing an api that includes `.on('some event', function(){})`, which seems to make a lot of sense for games.\n\n## Other `crtrdg` modules:\n- [crtrdg-gameloop](http://github.com/sethvincent/crtrdg-gameloop)\n- [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)\n- [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)\n\n\n## Contributing\n- Fork this repository.\n- Create a branch for you changes.\n- Include tests if applicable.\n- Add/edit documentation for any changes.\n- Submit a pull request.\n\n## License\nMIT"
contributors:
  - login: sethvincent
    id: 164214
    avatar_url: 'https://avatars.githubusercontent.com/u/164214?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/sethvincent'
    html_url: 'https://github.com/sethvincent'
    followers_url: 'https://api.github.com/users/sethvincent/followers'
    following_url: 'https://api.github.com/users/sethvincent/following{/other_user}'
    gists_url: 'https://api.github.com/users/sethvincent/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/sethvincent/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/sethvincent/subscriptions'
    organizations_url: 'https://api.github.com/users/sethvincent/orgs'
    repos_url: 'https://api.github.com/users/sethvincent/repos'
    events_url: 'https://api.github.com/users/sethvincent/events{/privacy}'
    received_events_url: 'https://api.github.com/users/sethvincent/received_events'
    type: User
    site_admin: false
    contributions: 29
  - login: davidmason
    id: 482026
    avatar_url: 'https://avatars.githubusercontent.com/u/482026?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/davidmason'
    html_url: 'https://github.com/davidmason'
    followers_url: 'https://api.github.com/users/davidmason/followers'
    following_url: 'https://api.github.com/users/davidmason/following{/other_user}'
    gists_url: 'https://api.github.com/users/davidmason/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/davidmason/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/davidmason/subscriptions'
    organizations_url: 'https://api.github.com/users/davidmason/orgs'
    repos_url: 'https://api.github.com/users/davidmason/repos'
    events_url: 'https://api.github.com/users/davidmason/events{/privacy}'
    received_events_url: 'https://api.github.com/users/davidmason/received_events'
    type: User
    site_admin: false
    contributions: 2
page: false
---

