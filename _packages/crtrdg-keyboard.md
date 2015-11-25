---
user: sethvincent
path: sethvincent/crtrdg-keyboard
name: crtrdg-keyboard
head: 12ea32efc8cf8f0b9421d8b6aeb3f17737ff86ed
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
    contributions: 7
  - login: shama
    id: 99604
    avatar_url: 'https://avatars.githubusercontent.com/u/99604?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/shama'
    html_url: 'https://github.com/shama'
    followers_url: 'https://api.github.com/users/shama/followers'
    following_url: 'https://api.github.com/users/shama/following{/other_user}'
    gists_url: 'https://api.github.com/users/shama/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/shama/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/shama/subscriptions'
    organizations_url: 'https://api.github.com/users/shama/orgs'
    repos_url: 'https://api.github.com/users/shama/repos'
    events_url: 'https://api.github.com/users/shama/events{/privacy}'
    received_events_url: 'https://api.github.com/users/shama/received_events'
    type: User
    site_admin: false
    contributions: 1
readme: "# crtrdg keyboard\n> keyboard listener module for crtrdg\n\n## Goals for crtrdg keyboard:\n- Emit keydown and keyup events.\n\n## Requirements\n- node.js\n- browserify / beefy\n- crtrdg-gameloop (or another game object with a reference to the canvas id)\n\n## Getting started\nInstall node if you haven't already.\n\n### Install browserify and beefy:\n```\nnpm install -g browserify beefy\n```\n\n### Create an index.html file:\n```\n<!DOCTYPE html>\n<html>\n<head>\n  <title>crtrdg gameloop test</title>\n</head>\n<body>\n\n<canvas id=\"game\"></canvas>\n\n<script src=\"./bundle.js\"></script>\n</body>\n</html>\n```\n\n### Create a game.js file:\n```\n// use crtrdg-gameloop for animating to the canvas with requestAnimationFrame.\nvar Game = require('crtrdg-gameloop');\n\n// require crtrdg-keyboard\nvar Keyboard = require('crtrdg-keyboard');\n\n// create a new game\nvar game = new Game({\n  canvasId: 'game',\n  width: '800',\n  height: '400',\n  backgroundColor: '#ff1f1f'\n});\n\n// create a new keyboard, passing the game as an argument\nvar keyboard = new Keyboard(game);\n\n// for simplicity and brevity:\nvar keys = keyboard.keys;\n\n// you can listen for keydown & keyup events\nkeyboard.on('keydown', function(key){\n  if (key === 'A'){\n    console.log('Yep! That is the A key!');\n  }\n});\n\nkeyboard.on('keyup', function(key){\n  if (key === 'A'){\n    console.log('Oh, you stopped pressing the A key.');\n  }\n});\n\n// alternately, you can check the keyboard.keysDown object inside of an update listener. \n// this is the recommended approach if you have a player entitity and you want it's behavior\n// to change based on keyboard input\ngame.on('update', function(interval){\n  if ('B' in keyboard.keysDown){\n    console.log('the B key is being pressed down!');\n  }\n});\n```\n\n## Purpose of `crtrdg`:\nAlmost every javascript game / animation library I've found bundles things like requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods, keyboard/mouse input, vector math, and more into one entangled library. If I don't like how the library handles just one of those components, I'm stuck with dead library weight, and sometimes it's difficult to replace a library's methods.\n\nSo what if each element of 2d games were broken up into it's own modules / repositories?\n\nWith inspiration from voxel.js, crtrdg is a collection of javascript modules used for developing 2d games.\n\nAs I learned more about node.js, the core events module, and browserify, I realized the ideal api for making simple 2d games could be based on node's events module. So you'll see a lot of crtrdg modules exposing an api that includes `.on('some event', function(){})`, which seems to make a lot of sense for games.\n\n## Other `crtrdg` modules:\n- [crtrdg-gameloop](http://github.com/sethvincent/crtrdg-gameloop)\n- [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)\n- [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)\n\n\n## Contributing\n- Fork this repository.\n- Create a branch for you changes.\n- Include tests if applicable.\n- Add/edit documentation for any changes.\n- Submit a pull request.\n\n## License\nMIT\n"
package:
  name: crtrdg-keyboard
  version: 0.0.2
  description: keyboard module for crtrdg
  main: index.js
  scripts:
    test: 'beefy test.js:bundle.js --live'
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-keyboard.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - game library
    - keyboard
    - interaction
    - events
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    inherits: ~2.0.0
    vkey: 0.0.2
  devDependencies:
    crtrdg-gameloop: 0.0.1
page: false
---

