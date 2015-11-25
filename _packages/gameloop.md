---
user: sethvincent
path: sethvincent/gameloop
name: gameloop
head: 0277b8b0374136e7436f555f49e4be2a57d42e03
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
    contributions: 21
  - login: Hypercubed
    id: 509946
    avatar_url: 'https://avatars.githubusercontent.com/u/509946?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/Hypercubed'
    html_url: 'https://github.com/Hypercubed'
    followers_url: 'https://api.github.com/users/Hypercubed/followers'
    following_url: 'https://api.github.com/users/Hypercubed/following{/other_user}'
    gists_url: 'https://api.github.com/users/Hypercubed/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/Hypercubed/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/Hypercubed/subscriptions'
    organizations_url: 'https://api.github.com/users/Hypercubed/orgs'
    repos_url: 'https://api.github.com/users/Hypercubed/repos'
    events_url: 'https://api.github.com/users/Hypercubed/events{/privacy}'
    received_events_url: 'https://api.github.com/users/Hypercubed/received_events'
    type: User
    site_admin: false
    contributions: 1
readme: >
  # gameloop

  > the core methods/events of a game loop: start, end, pause, resume, update,
  draw



  Designed for use with browserify.



  ## Requirements

  - node.js



  ## Install



  ````

  npm install gameloop

  ````



  ## Usage



  ### Create a canvas and game object:

  ```

  var canvas = document.createElement('canvas');



  var game = new Game({

    renderer: canvas.getContext('2d')

  });

  ````



  You can use it server-side by not passing in a canvas context: `var game
  = Game();`



  > the `new` keyword is optional



  ### Use update and draw events

  ````

  game.on('update', function(dt){});



  game.on('draw', function(context){});

  ````



  ### Use start, pause, and resume methods

  ````

  game.start();



  game.end();



  game.pause();



  game.resume();

  ````



  These methods have corresponding events:



  ````

  game.on('start', function(){});



  game.on('end', function(){});



  game.on('pause', function(){});



  game.on('resume', function(){});

  ````





  ## Contributing

  - Fork this repository.

  - Create a branch for your changes.

  - Include tests if applicable.

  - Add/edit documentation for any changes.

  - Submit a pull request.



  ## License

  MIT
package:
  name: gameloop
  version: 0.3.2
  description: super simple game loop for javascript – server or browser.
  main: index.js
  scripts:
    start: budo example.js --live
  repository:
    type: git
    url: 'git://github.com/sethvincent/gameloop.git'
  keywords:
    - games
    - animation
    - game library
    - game loop
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    component-emitter: ^1.2.0
    inherits: ~2.0.0
    raf: ^3.0.0
  devDependencies:
    budo: ^4.1.0
    crtrdg-keyboard: 0.0.2
    tape: ~2.1.0
    tic: ^0.2.1
page: false
---

