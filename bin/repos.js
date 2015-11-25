#! /usr/bin/env node

var fs = require('fs')
var path = require('path')
var ndjson = require('ndjson')
var matter = require('gray-matter')
var through = require('through2')

var dir = path.join(__dirname, '..', '_packages')
var read = process.stdin.pipe(ndjson.parse()).pipe(through.obj(createFiles))

function createFiles (repo, enc, next) {
  var front = matter.stringify('', repo)
  var filepath = path.join(dir, repo.name + '.md')
  fs.writeFile(filepath, front, next)
}
