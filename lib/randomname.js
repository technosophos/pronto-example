var pronto = require('pronto');

// Constructor
function RandomName() {
  // The pool of names.
  this.names = ['Anna', 'Bob', 'Claire', 'Dennis'];
}
module.exports = RandomName;

// Inherit the Command prototype.
pronto.inheritsCommand(RandomName);

// The command body.
RandomName.prototype.execute = function (cxt, params) {
  // Get a random number within this.name's range.
  var i = Math.floor(Math.random() * this.names.length);

  // Get a random name.
  var randomName = this.names[i];

  // We're done, here's the name.
  this.done(randomName);
}
