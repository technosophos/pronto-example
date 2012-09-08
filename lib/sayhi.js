var pronto = require('pronto');

// Constructor
function SayHi() {
}
module.exports = SayHi;

// Inherit the Pronto Command prototype.
pronto.inheritsCommand(SayHi);

// This is the command.
SayHi.prototype.execute = function (cxt, params) {

  // One param is required. It's the 'to' param.
  this.required(params, ['to']);

  // If the param 'message' is specified, we will use
  // this to generate the message. Otherwise we will
  // use the default string.
  var msg = params.message || 'Hi %s.';

  // Say 'hi' to someone.
  console.log(msg, params.to);

  // Tell Pronto we're done.
  this.done();
}
