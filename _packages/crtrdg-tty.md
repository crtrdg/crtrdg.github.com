---
user: freeman-lab
path: freeman-lab/crtrdg-tty
name: crtrdg-tty
head: e8c2b6bbbfad356d28dadd63b574244bf0ae2f41
page: false
readme: "# crtrdg-tty\n\n> keyboard module for crtrdg games that works in the terminal\n\nUseful for testing and debugging core game logic outside the browser, e.g. because you have separate modules for game logic and rendering and you want to test gameplay alone in the terminal. Works well with `crtrdg.js` games, but can be used just as well independently. Captures key presses from `stdin` using [`keypress`](https://github.com/TooTallNate/keypress) and separates key down and key up events using [`lodash.debounce`](https://github.com/lodash/lodash).\n\n## install\n\n    npm install --save crtrdg-touch\n\n## example\n\ninitialize and log key down events\n\n```javascript\nvar TTY = require('crtrdg-tty')\nvar Game = require('gameloop')\n\nvar game = Game()\nvar tty = TTY(game)\n\ntty.on('keyDown', function(key) {\n\tconsole.log(key)\n})\n```\n\nyou can also initialize without a `gameloop`, just call `start` to begin capturing input\n\n```javascript\nvar tty = TTY()\n\ntty.on('keyDown', function (key) {\n\tconsole.log(key)\n})\n\ntty.start()\n```\n\nto see a simple interactive demo call\n\n\tnpm start\n\ninside this module, and press or hold keys to see events\n\n## API\n\n### `create`\n\ncreate the tty object\n\n```javascript\nvar TTY = require('crtrdg-tty')\nvar Game = require('gameloop')\n\nvar game = Game()\nvar tty = TTY(game)\n```\n\n### `tty.on('keyDown')`\n\nkey down events\n\nprovides a key code for the key pressed from [`vkey`](https://github.com/chrisdickinson/vkey/)\n\n### `tty.on('keyUp')`\n\nkey up events\n\nprovides a key code for the key let up from [`vkey`](https://github.com/chrisdickinson/vkey/)\n\n### `tty.keysDown`\n\nobject with currently pressed keys set to true, e.g.\n\n```javascript\ntty.on('keyDown', function () {\n  console.log(tty.keysDown)\n})\n\n>> {<up>: true}\n```\n"
package:
  name: crtrdg-tty
  version: 1.1.0
  description: tty keyboard module designed for crtrdg.js games
  main: index.js
  scripts:
    test: standard
    start: node example.js
  repository:
    type: git
    url: 'git+https://github.com/freeman-lab/crtrdg-tty.git'
  keywords:
    - game
    - tty
    - keyboard
    - server
  author: freeman-lab
  license: MIT
  bugs:
    url: 'https://github.com/freeman-lab/crtrdg-tty/issues'
  homepage: 'https://github.com/freeman-lab/crtrdg-tty#readme'
  dependencies:
    eventemitter2: ^0.4.14
    inherits: ^2.0.1
    keycode: ^2.1.0
    lodash.debounce: ^4.0.0
    vkey: ^1.0.0
  devDependencies:
    gameloop: ^1.1.3
contributors:
  - login: freeman-lab
    id: 3387500
    avatar_url: 'https://avatars.githubusercontent.com/u/3387500?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/freeman-lab'
    html_url: 'https://github.com/freeman-lab'
    followers_url: 'https://api.github.com/users/freeman-lab/followers'
    following_url: 'https://api.github.com/users/freeman-lab/following{/other_user}'
    gists_url: 'https://api.github.com/users/freeman-lab/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/freeman-lab/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/freeman-lab/subscriptions'
    organizations_url: 'https://api.github.com/users/freeman-lab/orgs'
    repos_url: 'https://api.github.com/users/freeman-lab/repos'
    events_url: 'https://api.github.com/users/freeman-lab/events{/privacy}'
    received_events_url: 'https://api.github.com/users/freeman-lab/received_events'
    type: User
    site_admin: false
    contributions: 15
---

