---
user: finnp
path: finnp/crtrdg-arrows
name: crtrdg-arrows
head: 1b5d4de562f328d76e73074a90dc99f6edab1714
readme: >
  # crtrdg-arrow



  [![browser support](https://ci.testling.com/finnp/crtrdg-arrows.png)

  ](https://ci.testling.com/finnp/crtrdg-arrows)



  This module is designed for easy arrow control together with
  [crtrdg](http://crtrdg.com/).

  It is kind of like a more specific
  [crtrdg-keyboard](https://github.com/sethvincent/crtrdg-keyboard)

  only for the use with self defined Arrow keys.



  However it is designed to be independant so it can be used with
  [browserify](http://browserify.org/)

  without using something else from the crtrdg ecosystem.



  It supports events for the four directions as well as functions for

  directly asking the states of the arrows.



  You can simply install is with `npm install crtrdg-arrows` and then

  use `browserify`to transform it for the browser.



  ## Simple Example with crtrdg-gameloop

  ```javascript

  var Game = require('crtrdg-gameloop');

  var Arrows = require('crtrdg-arrows');



  var game = new Game({

    canvasId: 'game',

    width: 800,

    height: 400,

    backgroundColor: '#ff1f1f'

  });



  var arrows = new Arrows();



  var x = 10;



  arrows.on('down', function () {

    // Will be called once on keydown

    console.log('This key is not allowed');

  })



  game.on('update', function(interval){

    if (arrows.isDown('left')) {

      x -= 5;

    }

    if (arrows.isDown('right')) {

      x += 5;

    }

  });



  game.on('draw', function (context) {

    context.fillStyle = '#fff';

    context.fillRect(x, 390, 60, 10);

  });

  ```
package:
  name: crtrdg-arrows
  version: 0.0.2
  description: Arrow keys handling
  main: index.js
  scripts:
    test: 'browserify test.js | testling -u'
  author: Finn Pauls
  license: MIT
  dependencies:
    inherits: ~2.0.1
    simkey: ^0.2.0
  devDependencies:
    browserify: ^4.1.5
    tape: ~2.13.1
  repository:
    type: git
    url: 'https://github.com/finnp/crtrdg-arrows.git'
  keywords:
    - keys
    - games
    - arrows
    - crtrdg
    - arrow
    - keyboard
  bugs:
    url: 'https://github.com/finnp/crtrdg-arrows/issues'
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
contributors:
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
    contributions: 12
page: false
---

