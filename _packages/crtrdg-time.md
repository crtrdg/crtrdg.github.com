---
user: davidmason
path: davidmason/crtrdg-time
name: crtrdg-time
head: c3e2e7de9c06a39243e9630493370109a154833c
package:
  name: crtrdg-time
  version: 0.0.0
  description: Track elapsed game time in a crtrdg-gameloop
  main: index.js
  scripts:
    test: mocha
  repository:
    type: git
    url: 'https://github.com/davidmason/crtrdg-time.git'
  keywords:
    - crtrdg
    - games
    - html
    - canvas
    - animation
    - requestAnimationFrame
    - game library
    - time
  author: 'David Mason <drdmason@gmail.com>'
  license: MIT
  bugs:
    url: 'https://github.com/davidmason/crtrdg-time/issues'
  homepage: 'https://github.com/davidmason/crtrdg-time'
  devDependencies:
    mocha: ^1.18.2
readme: >-
  crtrdg-time

  ===========



  Track elapsed game time in a crtrdg-gameloop





  ## usage



  ```js

  var Game = require('crtrdg-gameloop'),

      game = new Game(),

      Time = require('crtrdg-time'),

      time = new Time(game);



  game.on('update', function (context) {

    console.log('Milliseconds: %d, Seconds: %d, Minutes: %d, Throbber: %f',
  time.millis, time.seconds(), time.minutes(), time.throb(1000));

  });

  ```



  `millis`, `seconds()` and `minutes()` all return duration since the timer was
  created (excluding any time that the game was paused).



  `throb(durationMillis)` returns a value between 0 and 1 that will rise and fall
  once per `durationMillis` milliseconds of game time (linear, not sine wave). To
  get a different range, coerce the value, e.g. if you have some text changing
  between 0.5 and 0.75 transparency every 2 seconds, you could use `throb(2000)
  * 0.25 + 0.5`





  ## License



  MIT
contributors:
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
    contributions: 3
page: false
---

