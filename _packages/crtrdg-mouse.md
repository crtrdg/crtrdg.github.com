---
user: sethvincent
path: sethvincent/crtrdg-mouse
name: crtrdg-mouse
head: bb45e5606b4dc2d5ffa039f9b5ac922c57b5be9d
readme: >
  # crtrdg mouse

  > mouse listener module for crtrdg



  ## Goals for crtrdg mouse:

  - Emit click, mouseup, mousedown, and mousemove events.



  ## Requirements

  - node.js

  - browserify / beefy

  - crtrdg-gameloop (or another game object with a reference to the canvas id)



  ## Getting started

  Install node if you haven't already.



  ### Install browserify and beefy:

  ```

  npm install -g browserify beefy

  ```



  ### Create an index.html file:

  ```

  <!DOCTYPE html>

  <html>

  <head>

    <title>crtrdg gameloop test</title>

  </head>

  <body>



  <canvas id="game"></canvas>



  <script src="./bundle.js"></script>

  </body>

  </html>

  ```



  ### Create a game.js file:

  ```javascript

  // use crtrdg-gameloop for animating to the canvas with requestAnimationFrame.

  var Game = require('gameloop');



  // require crtrdg-mouse

  var Mouse = require('crtrdg-mouse');



  // create a new game

  var canvas = document.createElement('canvas');

  document.body.appendChild(canvas);



  var game = new Game({

    renderer: canvas.getContext('2d')

  });



  game.width = canvas.width = 800;

  game.height = canvas.height = 400;



  // create the mouse and pass in the game and canvas element as arguments

  var mouse = new Mouse(game, canvas);



  // listen for click events

  mouse.on('click', function(loc){

    console.log('click at: ', loc);

  });



  // listen for mousedown events

  mouse.on('mousedown', function(loc){

    console.log('mousedown at: ', loc);

  });



  // listen for mouseup events

  mouse.on('mouseup', function(loc){

    console.log('mouseup at: ', loc);

  });



  // listen for mousemove events

  mouse.on('mousemove', function(loc){

    console.log('mousemove at: ', loc);

  });



  // request mouse location directly

  game.on('update', function (interval) {

    // mouse location is initialised with {x: 0, y: 0}

    // and gets updated for every mouse move

    if(mouse.location.x > this.width) {

      console.log('where are you going?');

    }

  });

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

  - [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)

  - [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)





  ## Contributing

  - Fork this repository.

  - Create a branch for you changes.

  - Include tests if applicable.

  - Add/edit documentation for any changes.

  - Submit a pull request.



  ## License

  MIT
package:
  name: crtrdg-mouse
  version: 0.1.1
  description: mouse module for 2d games. designed for games using the canvas.
  main: index.js
  scripts:
    test: 'beefy test.js:bundle.js --live'
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-mouse.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - game library
    - mouse
    - interaction
    - events
    - crtrdg
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    inherits: ^2.0.0
  devDependencies:
    gameloop: ^0.3.1
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
    contributions: 12
  - login: finnp
    id: 841788
    avatar_url: 'https://avatars.githubusercontent.com/u/841788?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/finnp'
    html_url: 'https://github.com/finnp'
    followers_url: 'https://api.github.com/users/finnp/followers'
    following_url: 'https://api.github.com/users/finnp/following{/other_user}'
    gists_url: 'https://api.github.com/users/finnp/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/finnp/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/finnp/subscriptions'
    organizations_url: 'https://api.github.com/users/finnp/orgs'
    repos_url: 'https://api.github.com/users/finnp/repos'
    events_url: 'https://api.github.com/users/finnp/events{/privacy}'
    received_events_url: 'https://api.github.com/users/finnp/received_events'
    type: User
    site_admin: false
    contributions: 1
page: false
---

