var pronto = require('pronto');
var RandomName = require('./lib/randomname');
var SayHi = require('./lib/sayhi');

var register = new pronto.Registry();
var router = new pronto.Router(register);

register.route('example')
  .does(RandomName, 'name')
  .does(SayHi)
    .using('to').from('cxt:name')
    .using('message', 'Hello %s')




router.handleRequest('example');
