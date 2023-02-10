---
layout: home
---

# Make 2d games the node.js way.
crtrdg.js is intended for making simple games – stuff like old-school nintendo or sega. Arcade games. Platformers, top-down rpgs and multi-directional shooters, weird puzzle story games that don't make sense. Stuff like that.

crtrdg is a set of simple JavaScript modules created as an exploration of what it means to build javascript modules that each do one thing well.

Try it out. Submit issues and pull requests. Be loud if a certain module's implementation sucks. Especially if you have a solution to propose or a pull request.

---

## Existing crtrdg modules:

{% include packages.html %}

crtrdg takes a very modular approach to javascript games, and does so with the help of tools like [browserify](http://github.com/substack/browserify) and [budo](https://npmjs.com/budo).

---

## Try out a more complex demo with bullets and an enemy!

Example crtrdg.js game: [DEMO](http://sethvincent.github.io/example-crtrdg-game/), [source on github](https://github.com/sethvincent/example-crtrdg-game).

---

## Purpose of crtrdg:
Almost every javascript game / animation library I've found bundles things like requestAnimationFrame polyfill, gameloop, entities, abstract drawing methods, keyboard/mouse input, vector math, and more into one entangled library. If I don't like how the library handles just one of those components, I'm stuck with dead library weight, and sometimes it's difficult to replace a library's methods.

So what if each element of 2d games were broken up into it's own modules / repositories?

Inspired by <a href="http://voxeljs.com" target="_blank">voxel.js</a>, crtrdg is a collection of javascript modules used for developing 2d games.

As I learned more about node.js, the core events module, and browserify, I realized the ideal api for making simple 2d games could be based on node's events module. So you'll see a lot of crtrdg modules exposing an api that includes .on('some event', function(){}), which seems to make a lot of sense for games.
  
---
