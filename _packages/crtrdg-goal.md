---
user: sethvincent
path: sethvincent/crtrdg-goal
name: crtrdg-goal
head: b53d41e2f2d0b34fb6ab40c3e599303ff654b5e5
readme: >-
  # crtrdg-goal

  > achievements module for games



  ## Goals for crtrdg-goal:

  - Quick and dirty little achievements system for crtrdg games.





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



  ### install crtrdg modules

  ```

  npm install --save crtrdg-gameloop crtrdg-goal crtrdg-mouse

  ```

  `crtrdg-mouse` is an optional module. You caould probably also use something
  other than `crtrdg-gameloop`, you would just need a different game object in
  its place.



  ## Usage:

  ### Create an index.html file:

  ```

  <!DOCTYPE html>

  <html>

  <head>

    <title>crtrdg goal test</title>

  </head>

  <body>



  <canvas id="game"></canvas>



  <script src="./bundle.js"></script>

  </body>

  </html>

  ```



  ### Create a game.js file:

  ```

  var Game = require('crtrdg-gameloop');

  var Mouse = require('crtrdg-mouse');

  var goals = require('crtrdg-goal')(game);



  var game = new Game({

    canvasId: 'game',

    width: '800',

    height: '400',

    backgroundColor: '#ff1f1f',

  });



  var mouse = new Mouse(game);



  mouse.on('click', function(location){

    goals.met(goalOne);

  });



  goalOne = goals.create({

    name: 'first goal'

  });



  console.log(goals)



  goalOne.on('active', function(goal){

    console.log(goal.name + ' is active');

  });



  goalOne.on('met', function(goal){

    console.log(goal.name + ' is met!');

  });



  goals.set(goalOne);

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

  - [crtrdg-scene](http://github.com/sethvincent/crtrdg-mouse)



  ## Contributing

  - Fork this repository.

  - Create a branch for you changes.

  - Include tests if applicable.

  - Add/edit documentation for any changes.

  - Submit a pull request.



  ## License

  MIT
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
    contributions: 3
package:
  name: crtrdg-goal
  version: 0.0.0
  description: achievements module for crtrdg games
  main: index.js
  scripts:
    test: 'beefy test.js:bundle.js --live'
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-goal.git'
  keywords:
    - games
    - canvas
    - game library
    - achievements
    - crtrdg
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    inherits: ~2.0.0
  devDependencies:
    crtrdg-gameloop: ~0.0.3
    crtrdg-mouse: ~0.0.1
page: false
---

