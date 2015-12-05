---
user: sethvincent
path: sethvincent/crtrdg-mouse
name: crtrdg-mouse
head: 94c014ef9c096772e54cce981b635991fcaeaf3c
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
    contributions: 12
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
    contributions: 1
readme: |
  # crtrdg-mouse

  > mouse event listener module for crtrdg

  ## Install

      npm install --save crtrdg-mouse

  ## API

  ### createMouse

  Create the `mouse` object

  **Parameters**

  -   `game` **Object** – a crtrdg game object

  **Examples**

  ```javascript
  var createGame = require('crtrdg-gameloop')
  var createMouse = require('crtrdg-mouse')

  var game = createGame()
  var mouse = createMouse(game)
  ```

  ### mouse#click

  'click' event

  **Parameters**

  -   `location` **object** – click coordinates

  ### mouse#mousedown

  'mousedown' event

  **Parameters**

  -   `location` **object** – mousedown coordinates

  ### mouse#mousemove

  'mousemove' event

  **Parameters**

  -   `location` **object** – mousemove coordinates

  ### mouse#mouseup

  'mouseup' event

  **Parameters**

  -   `location` **object** – mouseup coordinates

  ## Contributing

  -   Fork this repository.
  -   Create a branch for you changes.
  -   Include tests if applicable.
  -   Add/edit documentation for any changes.
  -   Submit a pull request.

  ## License

  MIT
package:
  name: crtrdg-mouse
  version: 1.0.0
  description: mouse module for 2d games. designed for games using the canvas.
  main: index.js
  scripts:
    build-docs: "documentation-readme -s 'API'"
    start: budo example.js --live
  repository:
    type: git
    url: 'git://github.com/sethvincent/crtrdg-mouse.git'
  keywords:
    - games
    - html
    - canvas
    - animation
    - game library
    - mouse
    - interaction
    - events
    - crtrdg
  author:
    name: Seth Vincent
    email: sethvincent@gmail.com
    url: 'http://sethvincent.com'
  license: MIT
  dependencies:
    eventemitter2: ^0.4.14
    inherits: ^2.0.0
  devDependencies:
    budo: ^7.0.2
    documentation-readme: ^2.1.1
    gameloop: ^1.1.0
page: false
---

