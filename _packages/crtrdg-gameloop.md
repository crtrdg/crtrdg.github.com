---
user: sethvincent
path: sethvincent/crtrdg-gameloop
name: crtrdg-gameloop
head: bc53233086fd7d352de0c5544c101926f0cbe528
readme: >
  # crtrdg gameloop

  > canvas animation using requestAnimationFrame



  [![browser support](https://ci.testling.com/sethvincent/crtrdg-gameloop.png)

  ](https://ci.testling.com/sethvincent/crtrdg-gameloop)



  ## Goals for the crtrdg gameloop:

  - Initialize 2d canvas and animate using requestAnimationFrame.

  - Create a gameloop that emits update and draw events.

  - Emit pause and resume events.



  ## Requirements

  - node.js

  - browserify / beefy



  ## Getting started

  Try it out on requirebin:
  [http://requirebin.com/?gist=5952933](http://requirebin.com/?gist=5952933)



  ### Install node if you haven't already.



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

  ```

  var Game = require('crtrdg-gameloop');



  // initialize the game with the canvas id of your game

  // the width, height, and default background color of the canvas

  var game = new Game({

    canvas: 'game',

    width: '800',

    height: '400'

  });



  // every time through the loop, the `update` event will be emitted,

  // interval is the amount of time between each loop

  // listen for the `update` event like this:

  game.on('update', function(interval){

    console.log('update', interval);

  });



  // every time through the loop, the `draw` event will be emitted.

  // context is the canvas context, and you can use it to draw on the canvas like
  usual.

  // listen for the `draw` event like this:

  game.on('draw', function(context){

    context.fillStyle = '#fff';

    context.fillRect(0, 0, game.width, game.height);

  });



  // if game.pause() is called somewhere in your code,

  // a `pause` event will be emitted

  // listen for it like this:

  game.on('pause', function(){

    console.log('paused');

  });



  // if game.resume() is called somewhere in your code,

  // a `resume` event will be emitted

  // listen for it like this:

  game.on('resume', function(){

    console.log('resumed');

  });

  ```



  ## Purpose of `crtrdg`:

  Almost every javascript game / animation library I've found bundles things like
  requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods,
  keyboard/mouse input, vector math, and more into one entangled library. If
  I don't like how the library handles just one of those



  With inspiration from voxel.js, crtrdg is a collection of javascript modules
  used for developing 2d games.



  As I learned more about node.js, the core events module, and browserify,
  I realized the ideal api for making simple 2d games could be based on node's
  events module.



  ## Other `crtrdg` modules:

  - [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)

  - [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)

  - [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)



  ## Modules that work well with `crtrdg-gameloop`:

  - [aabb-2d](http://github.com/chrisdickinson/aabb-2d)

  - [gl-matrix](http://github.com/toji/gl-matrix)



  ## Contributing

  - Fork this repository.

  - Create a branch for you changes.

  - Include tests if applicable.

  - Add/edit documentation for any changes.

  - Submit a pull request.



  ## License

  MIT
package:
  name: crtrdg-gameloop
  version: 0.2.2
  description: gameloop module for crtrdg – canvas-based animation.
  main: index.js
  scripts:
    start: 'beefy example.js:bundle.js --live'
    test: 'browserify test.js | testling'
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-gameloop.git'
  testling:
    files: test.js
    browsers:
      - ie/6..latest
      - chrome/22..latest
      - firefox/16..latest
      - safari/latest
      - opera/11.0..latest
      - iphone/6
      - ipad/6
      - android-browser/latest
  keywords:
    - games
    - html
    - canvas
    - animation
    - requestAnimationFrame
    - game library
    - crtrdg
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    inherits: ~2.0.0
    raf-stream: ^1.0.0
  devDependencies:
    crtrdg-mouse: 0.0.1
    tape: ^2.13.1
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
    contributions: 36
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
    contributions: 3
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
  - login: gamecubate
    id: 1483884
    avatar_url: 'https://avatars.githubusercontent.com/u/1483884?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/gamecubate'
    html_url: 'https://github.com/gamecubate'
    followers_url: 'https://api.github.com/users/gamecubate/followers'
    following_url: 'https://api.github.com/users/gamecubate/following{/other_user}'
    gists_url: 'https://api.github.com/users/gamecubate/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/gamecubate/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/gamecubate/subscriptions'
    organizations_url: 'https://api.github.com/users/gamecubate/orgs'
    repos_url: 'https://api.github.com/users/gamecubate/repos'
    events_url: 'https://api.github.com/users/gamecubate/events{/privacy}'
    received_events_url: 'https://api.github.com/users/gamecubate/received_events'
    type: User
    site_admin: false
    contributions: 1
  - login: EvanHahn
    id: 777712
    avatar_url: 'https://avatars.githubusercontent.com/u/777712?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/EvanHahn'
    html_url: 'https://github.com/EvanHahn'
    followers_url: 'https://api.github.com/users/EvanHahn/followers'
    following_url: 'https://api.github.com/users/EvanHahn/following{/other_user}'
    gists_url: 'https://api.github.com/users/EvanHahn/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/EvanHahn/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/EvanHahn/subscriptions'
    organizations_url: 'https://api.github.com/users/EvanHahn/orgs'
    repos_url: 'https://api.github.com/users/EvanHahn/repos'
    events_url: 'https://api.github.com/users/EvanHahn/events{/privacy}'
    received_events_url: 'https://api.github.com/users/EvanHahn/received_events'
    type: User
    site_admin: false
    contributions: 1
page: false
---

