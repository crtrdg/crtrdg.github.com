---
user: sethvincent
path: sethvincent/crtrdg-scene
name: crtrdg-scene
head: fcb2d21fe06567664b3d195a89a15c7eba436f87
readme: >-
  # crtrdg scene

  > entity module for games



  ## Goals for crtrdg-scene:

  - A simple interface for handling different levels or screens of a game.



  This is still an overly simple and naive implementation of a scene manager. Not
  quite ready for real use, but almost.



  ## Requirements

  - node.js

  - browserify / beefy

  - crtrdg-gameloop (or possibly another method of animating the canvas with
  requestAnimationFrame that emits `update` and `draw` events)



  ## Getting started

  Install node if you haven't already.



  ### Install browserify and beefy:

  ```

  npm install -g browserify beefy

  ```



  ## Usage:

  ### Create an index.html file:

  ```

  <!DOCTYPE html>

  <html>

  <head>

    <title>crtrdg scene test</title>

  </head>

  <body>



  <canvas id="game"></canvas>



  <script src="./bundle.js"></script>

  </body>

  </html>

  ```



  ### Create a game.js file:

  ```

  var Game = require('crtrdg-gameloop')

  var Mouse = require('crtrdg-mouse')

  var scenes = require('crtrdg-scene')()



  var game = new Game({

    canvas: 'game',

    width: '800',

    height: '400'

  })



  game.on('update', function (dt) {

    scenes.update(dt)

  })



  game.on('draw', function (context) {

    scenes.draw(context)

  })



  var mouse = new Mouse(game)



  mouse.on('click', function (location) {

    if (scenes.active.name === 'first scene') scenes.set(sceneTwo)

    else scenes.set(scene)

  })



  var scene = scenes({

    name: 'first scene'

  })



  scene.on('start', sceneSwitch)



  scene.on('draw', function (c) {

    console.log('scene one drawing')

    c.fillStyle = '#e1f23f'

    c.fillRect(0, 0, game.width, game.height)

  })



  scenes.set(scene)



  var sceneTwo = scenes({

    name: 'second scene',

    backgroundColor: '#7def71'

  })



  sceneTwo.on('start', sceneSwitch)



  sceneTwo.on('draw', function (c) {

    console.log('scene two drawing')

    c.fillStyle = sceneTwo.backgroundColor

    c.fillRect(0, 0, game.width, game.height)

  })



  function setMessage (text) {

    document.getElementById('scene-name').innerHTML = text

  }



  function sceneSwitch (scene) {

    console.log(scene.name)

    setMessage(scene.name)

  }

  ```



  ## Purpose of `crtrdg`:

  Almost every javascript game / animation library I've found bundles things like
  requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods,
  keyboard/mouse input, vector math, and more into one entangled library. If
  I don't like how the library handles just one of those components, I'm stuck
  with dead library weight, and sometimes it's difficult to replace a library's
  methods.



  So what if each element of 2d games were broken up into it's own modules
  / repositories?



  With inspiration from voxel.js, crtrdg is a collection of javascript modules
  used for developing 2d games.



  As I learned more about node.js, the core events module, and browserify,
  I realized the ideal api for making simple 2d games could be based on node's
  events module. So you'll see a lot of crtrdg modules exposing an api that
  includes `.on('some event', function(){})`, which seems to make a lot of sense
  for games.



  ## Other `crtrdg` modules:

  - [crtrdg-gameloop](http://github.com/sethvincent/crtrdg-gameloop)

  - [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)

  - [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)

  - [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)





  ## Contributing

  - Fork this repository.

  - Create a branch for you changes.

  - Include tests if applicable.

  - Add/edit documentation for any changes.

  - Submit a pull request.



  ## License

  MIT
package:
  name: crtrdg-scene
  version: 1.0.1
  description: scene module for crtrdg games
  main: index.js
  scripts:
    start: 'budo example.js:bundle.js --live'
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-scene.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - requestAnimationFrame
    - game library
    - scene
    - crtrdg
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    inherits: ~2.0.0
  devDependencies:
    budo: ^4.2.1
    crtrdg-gameloop: ~0.2.0
    crtrdg-mouse: ~0.0.3
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
    contributions: 13
page: false
---

