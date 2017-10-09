const connect = require('connect');
const serveStatic = require('serve-static');
const vhost = require('vhost');
const dupa = connect();
var app = connect();

dupa.use(serveStatic('dupa'));
app.use(vhost('dupa.local', dupa));

app.listen(3000);