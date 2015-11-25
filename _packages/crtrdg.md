---
user: sethvincent
path: sethvincent/crtrdg
name: crtrdg
head: 32d01831ab39baa56e46a2ff386429e32a0d01fb
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
    contributions: 2
readme: |-
  # crtrdg.js

  Go to [crtrdg.com](http://crtrdg.com) to learn more.
package:
  name: crtrdg
  description: a toolkit for making 2d games with javascript
  version: 0.1.0
  repository:
    url: 'git://github.com/sethvincent/crtrdg.git'
  main: index.js
  scripts:
    test: 'beefy test.js:bundle.js --live'
  dependencies:
    crtrdg-scene: ~0.1.0
    crtrdg-entity: ~0.2.0
    crtrdg-mouse: 0.0.3
    crtrdg-keyboard: 0.0.2
    crtrdg-gameloop: ~0.2.0
  devDependencies:
    beefy: ~0.7.1
    browserify: ~3.24.2
page: false
---

