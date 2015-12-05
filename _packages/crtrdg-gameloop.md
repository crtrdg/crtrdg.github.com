---
user: sethvincent
path: sethvincent/crtrdg-gameloop
name: crtrdg-gameloop
head: 70bd0e667574f4af08ab49e05eeaa812878baa24
package:
  name: crtrdg-gameloop
  version: 1.0.0
  description: gameloop module for crtrdg – canvas-based animation.
  main: index.js
  scripts:
    build-docs: "documentation-readme -s 'API'"
    start: budo example.js --live
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
    gameloop-canvas: ^1.1.0
    isarray: 0.0.1
  devDependencies:
    browserify: ^12.0.1
    budo: ^7.0.2
    crtrdg-mouse: 0.0.1
    documentation-readme: ^2.1.1
    tape: ^2.13.1
readme: "# crtrdg gameloop\n\n> canvas animation using requestAnimationFrame\n\n## Goals for the crtrdg gameloop:\n\n-   Initialize 2d canvas and animate using requestAnimationFrame.\n-   Create a gameloop that emits update and draw events.\n-   Emit pause and resume events.\n\n## Install\n\n    npm install crtrdg-gameloop\n\n## Other `crtrdg` modules:\n\n-   [crtrdg-entity](http://github.com/sethvincent/crtrdg-entity)\n-   [crtrdg-keyboard](http://github.com/sethvincent/crtrdg-keyboard)\n-   [crtrdg-mouse](http://github.com/sethvincent/crtrdg-mouse)\n\n## Contributing\n\n-   Fork this repository.\n-   Create a branch for you changes.\n-   Include tests if applicable.\n-   Add/edit documentation for any changes.\n-   Submit a pull request.\n\n## API\n\n### createGame\n\nCreate the game\n\n**Parameters**\n\n-   `options` **Object** \n    -   `options.canvas` **[Object]** – id or dom node of canvas tag\n    -   `options.fps` **[Number]** \n\n**Examples**\n\n```javascript\nvar createGame = require('crtrdg-gameloop')\n\nvar game = createGame({ canvas: 'game' })\n```\n\n### game.draw\n\nDraw to the canvas\n\n**Parameters**\n\n-   `renderer` **Object** \n-   `context`  \n-   `delta` **Number** – time elapsed since last update\n\n### game.end\n\nEnd the game. Emits the `end` event/\n\n**Examples**\n\n```javascript\ngame.end()\n```\n\n### game.resume\n\nResume the game. Emits the `resume` event.\n\n**Examples**\n\n```javascript\ngame.resume()\n```\n\n### game.toggle\n\nPause or start game depending on game state. Emits either the `pause` or `resume` event.\n\n**Examples**\n\n```javascript\ngame.toggle()\n```\n\n### game.update\n\nUpdate the game state. Emits the `update` event. You'll likely never call this method, but you may need to override it. Make sure to always emit the update event with the `delta` time.\n\n**Parameters**\n\n-   `delta` **Number** – time elapsed since last update\n\n### Game#draw\n\nDraw event.\n\n**Parameters**\n\n-   `renderer` **Object** \n-   `delta` **Number** \n\n**Examples**\n\n```javascript\ngame.on('draw', function (renderer, dt) {\n  console.log(dt)\n})\n```\n\n### Game#end\n\nEnd event. Fired when `game.end()` is called.\n\n**Examples**\n\n```javascript\ngame.on('end', function () {})\n```\n\n### Game#pause\n\nPause event. Fired when `game.pause()` is called.\n\n**Examples**\n\n```javascript\ngame.on('pause', function () {})\n```\n\n### Game#resume\n\nResume event. Fired when `game.resume()` is called.\n\n**Examples**\n\n```javascript\ngame.on('resume', function () {})\n```\n\n### Game#start\n\nStart event. Fired when `game.start()` is called.\n\n**Examples**\n\n```javascript\ngame.on('start', function () {})\n```\n\n### Game#update\n\nUpdate event.\n\n**Parameters**\n\n-   `delta` **Number** \n\n**Examples**\n\n```javascript\ngame.on('update', function (dt) {\n  console.log(dt)\n})\n```\n\n## License\n\nMIT\n"
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
    contributions: 38
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

