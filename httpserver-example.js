var pronto = require('pronto');

var register = new pronto.Registry();

register
  // Basic
  .route('/')
    .does(pronto.commands.HTTPResponse)
      .using('body', 'Hello World.')

  // Show lots of options
  .route('/fake-error')
    .does(pronto.commands.HTTPResponse)
      .using('code', 404)
      .using('contentType', 'text/plain')
      .using('headers', {'X-Fake-Header': 'foo'})
      .using('encoding', 'utf8')
      .using('body', 'Genuine Faux 404 Error')
;


// Now start up a server.
var server =pronto.HTTPServer.createServer(register);
server.listen(8000, 'localhost');
