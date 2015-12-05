---
user: sethvincent
path: sethvincent/crtrdg-keyboard
name: crtrdg-keyboard
head: b79ef7145df76bbcb8a258b0cce1693cf8f08677
readme: "# crtrdg keyboard\n\n> keyboard listener module for crtrdg\n\n## Install\n\n    npm install --save crtrdg-keyboard\n\n## API\n\n### createKeyboard\n\nCreate the keyboard object.\n\n**Examples**\n\n```javascript\nvar createKeyboard = require('crtrdg-keyboard')\nvar keyboard = createKeyboard()\n```\n\n### keyboard#keydown\n\nkeydown event\n\n**Parameters**\n\n-   `keyCode` **String** \n\n**Examples**\n\n```javascript\nkeyboard.on('keydown', function (key) {\n  console.log(key)\n})\n```\n\n### keyboard#keyup\n\nkeyup event\n\n**Parameters**\n\n-   `keyCode` **String** \n\n**Examples**\n\n```javascript\nkeyboard.on('keyup', function (key) {\n  console.log(key)\n})\n```\n\n## Contributing\n\n-   Fork this repository.\n-   Create a branch for you changes.\n-   Include tests if applicable.\n-   Add/edit documentation for any changes.\n-   Submit a pull request.\n\n## License\n\nMIT\n"
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
    contributions: 8
  - login: shama
    id: 99604
    avatar_url: 'https://avatars.githubusercontent.com/u/99604?v=3'
    gravatar_id: ''
    url: 'https://api.github.com/users/shama'
    html_url: 'https://github.com/shama'
    followers_url: 'https://api.github.com/users/shama/followers'
    following_url: 'https://api.github.com/users/shama/following{/other_user}'
    gists_url: 'https://api.github.com/users/shama/gists{/gist_id}'
    starred_url: 'https://api.github.com/users/shama/starred{/owner}{/repo}'
    subscriptions_url: 'https://api.github.com/users/shama/subscriptions'
    organizations_url: 'https://api.github.com/users/shama/orgs'
    repos_url: 'https://api.github.com/users/shama/repos'
    events_url: 'https://api.github.com/users/shama/events{/privacy}'
    received_events_url: 'https://api.github.com/users/shama/received_events'
    type: User
    site_admin: false
    contributions: 1
package:
  name: crtrdg-keyboard
  version: 1.0.1
  description: keyboard module for crtrdg
  main: index.js
  scripts:
    build-docs: "documentation-readme -s 'API'"
    start: budo example.js --live
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-keyboard.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - game library
    - keyboard
    - interaction
    - events
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    documentation-readme: ^2.1.1
    eventemitter2: ^0.4.14
    inherits: ~2.0.0
    vkey: 1.0.0
  devDependencies:
    budo: ^7.0.2
    crtrdg-gameloop: 1.0.0
page: false
---

