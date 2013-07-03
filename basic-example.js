/**
 * This is an example Pronto commandline app.
 *
 * It has one route ('example') that runs two commands
 * (RandomName and then SayHi). It prints 'Hello %name'
 * to the console.
 */
var pronto = require('pronto');
var RandomName = require('./lib/randomname');
var SayHi = require('./lib/sayhi');

var register = new pronto.Registry();
var router = new pronto.Router(register)

register.route('example')
  .does(RandomName, 'name')
  .does(SayHi)
    .using('to').from('cxt:name')
    .using('message', '%s is a cat.')




router.handleRequest('example');
