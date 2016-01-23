---
user: freeman-lab
path: freeman-lab/crtrdg-touch
name: crtrdg-touch
head: 7daa56597c4290bf4959b8de7d698d8894b316d2
page: false
readme: "# crtrdg-touch\n\n> touch event module for crtrdg games\n\n## install\n\n    npm install --save crtrdg-touch\n\n## example\n\ncall\n\n\tnpm start\n\ninside this module, click and swipe on the canvas element, and check the console for events\n\n## API\n\n### `create`\n\ncreate the touch object and add to an existing game\n\n```javascript\nvar Game = require('crtrdg-game')\nvar Touch = require('crtrdg-touch')\n\nvar game = Game()\nvar touch = Touch(game)\n```\n\nif ``game`` is not provided, will attach touch events to `document`\n\n### `touch.on('<tap*>')`\n\ntap events\n\nprovides a few common subdivions of the canvas, with the following event sets:\n- quadrants `<tapUpLeft>`, `<tapUpRight>`, `<tapDownLeft>`, `<tapDownRight>`\n- horizontal thirds `<tapLeft>`, `<tapCenter>`, `<tapRight>`\n- vertical thirds `<tapUp>`, `<tapMiddle>`, `<tapDown>`\n\n**parameters**\n\n-   `location` **Object** touch location of tap e.g. `{x: 50, y: 100}`\n\n**examples**\n\n```javascript\nkeyboard.on('<tapUpLeft>', function (location) {\n  console.log(location)\n})\n```\n\n### `touch.on('<swipe*>')`\n\nswipe events\n\nincludes `<swipeLeft>`, `<swipeRight>`, `<swipeUp>`, `<swipeDown>`\n\n**parameters**\n\n-   `location` **Object** touch location at end of swipe e.g. `{x: 50, y: 100}`\n\n**examples**\n\n```javascript\ntouch.on('<swipeLeft>', function (location) {\n  console.log(location)\n})\n```\n\n### `touch.down`\n\nobject with current touch events set to true, where current is defined by the 100ms following a touch\n\n**examples**\n\n```javascript\ntouch.on('<swipeLeft>', function (location) {\n  console.log(touch.down)\n})\n\n>> {<swipeLeft>: true}\n```\n\n## Contributing\n\n-   Fork this repository.\n-   Create a branch for you changes.\n-   Include tests if applicable.\n-   Add/edit documentation for any changes.\n-   Submit a pull request.\n\n## License\n\nMIT\n"
package:
  name: crtrdg-touch
  version: 1.1.0
  description: touch module for crtrdg.js
  main: index.js
  scripts:
    test: standard
    start: budo example.js --live
  repository:
    type: git
    url: 'git+https://github.com/freeman-lab/crtrdg-touch.git'
  keywords:
    - touch
    - swipe
    - tap
    - games
  author: freeman-lab
  license: MIT
  bugs:
    url: 'https://github.com/freeman-lab/crtrdg-touch/issues'
  homepage: 'https://github.com/freeman-lab/crtrdg-touch#readme'
  dependencies:
    eventemitter2: ^0.4.14
    inherits: ^2.0.1
    lodash: ^3.10.1
    touch-position: ^1.1.0
    touchy: ^0.1.6
  devDependencies:
    budo: ^7.1.0
    crtrdg-gameloop: ^1.0.3
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
    contributions: 17
---

