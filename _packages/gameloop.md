---
user: sethvincent
path: sethvincent/gameloop
name: gameloop
head: d075686d9c1d2f6cd200b4498d7c22ac45ba8555
readme: "# gameloop\n\n> the core methods/events of a game loop: start, end, pause, resume, update, draw\n\n## Install\n\n    npm install gameloop\n\nDesigned for use with browserify.\n\n## Usage\n\n### Create a canvas and game object:\n\n```js\nvar canvas = document.createElement('canvas')\n\nvar game = new Game({\n  renderer: canvas.getContext('2d')\n})\n```\n\nYou can use it server-side by not passing in a canvas context: `var game = Game();`\n\n> the `new` keyword is optional\n\n### Use update and draw events\n\n```js\ngame.on('update', function(dt){})\n\ngame.on('draw', function(context){})\n```\n\n## API\n\n### createGame\n\nCreate the game\n\n**Parameters**\n\n-   `options` **Object** \n    -   `options.renderer` **Object** \n    -   `options.fps` **Number** \n\n**Examples**\n\n```javascript\nvar createGame = require('gameloop')\n\nvar game = createGame({\n  renderer: document.createElement('canvas').getContext('2d')\n})\n```\n\n### game.draw\n\nDraw the game. Emits the `draw` event. You'll likely never call this method, but you may need to override it. Make sure to always emit the update event with the renderer and `delta` time.\n\n**Parameters**\n\n-   `renderer` **Object** \n-   `deltaTime` **Number** – time remaining until game.update is called\n-   `frameState`  \n\n### game.end\n\nEnd the game. Emits the `end` event/\n\n**Parameters**\n\n-   `state` **Object** – state of end game conditions\n\n**Examples**\n\n```javascript\ngame.end()\n```\n\n### game.pause\n\nPause the game. Emits the `pause` event.\n\n**Examples**\n\n```javascript\ngame.pause()\n```\n\n### game.resume\n\nResume the game. Emits the `resume` event.\n\n**Examples**\n\n```javascript\ngame.resume()\n```\n\n### game.start\n\nStart the game. Emits the `start` event.\n\n**Parameters**\n\n-   `state` **Object** – arbitrary starting game state emitted by `start` event.\n\n**Examples**\n\n```javascript\ngame.start()\n```\n\n### game.toggle\n\nPause or start game depending on game state. Emits either the `pause` or `resume` event.\n\n**Examples**\n\n```javascript\ngame.toggle()\n```\n\n### game.update\n\nUpdate the game state. Emits the `update` event. You'll likely never call this method, but you may need to override it. Make sure to always emit the update event with the `delta` time.\n\n**Parameters**\n\n-   `interval` **Number** – interval between each frame\n-   `time` **Number** – total time elapsed\n\n### Game#draw\n\nDraw event.\n\n**Parameters**\n\n-   `frameState` **Number** – current state of the completion of the frame\n-   `delta` **Number** \n\n**Examples**\n\n```javascript\ngame.on('draw', function (renderer, dt) {\n  console.log(dt)\n})\n```\n\n### Game#end\n\nEnd event. Fired when `game.end()` is called.\n\n**Parameters**\n\n-   `state` **Object** state of end game conditions\n\n**Examples**\n\n```javascript\ngame.on('end', function (state) {})\n```\n\n### Game#pause\n\nPause event. Fired when `game.pause()` is called.\n\n**Examples**\n\n```javascript\ngame.on('pause', function () {})\n```\n\n### Game#resume\n\nResume event. Fired when `game.resume()` is called.\n\n**Examples**\n\n```javascript\ngame.on('resume', function () {})\n```\n\n### Game#start\n\nStart event. Fired when `game.start()` is called.\n\n**Examples**\n\n```javascript\ngame.on('start', function () {})\n```\n\n### Game#update\n\nUpdate event.\n\n**Parameters**\n\n-   `interval` **Number** – interval between each frame\n-   `frameState` **Number** – current state of the completion of the frame\n-   `time` **Number** – total time elapsed\n\n**Examples**\n\n```javascript\ngame.on('update', function (interval, time) {\n  console.log(interval)\n})\n```\n\n## Contributing\n\n-   Fork this repository.\n-   Create a branch for your changes.\n-   Include tests if applicable.\n-   Add/edit documentation for any changes.\n-   Submit a pull request.\n\n## License\n\nMIT\n"
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
    contributions: 27
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
package:
  name: gameloop
  version: 1.1.3
  description: simple game loop for javascript – server or browser.
  main: index.js
  scripts:
    build-docs: "documentation-readme -s 'API'"
    test: 'standard && tape test.js | tap-spec'
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
    eventemitter2: ^0.4.14
    inherits: ~2.0.0
    performance-now: ^0.2.0
    raf: ^3.0.0
    tap-spec: ^4.1.1
    tape: ^2.1.1
  devDependencies:
    budo: ^7.0.0
    crtrdg-keyboard: 0.0.2
    documentation-readme: ^2.1.1
    standard: ^5.4.1
    tape: ~2.1.0
    tic: ^0.2.1
page: false
---

