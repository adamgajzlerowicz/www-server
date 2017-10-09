const connect = require('connect');
const serveStatic = require('serve-static');
const vhost = require('vhost');
var app = connect();

const dupa = connect();
dupa.use(serveStatic('dupa'));
app.use(vhost('dupa.local', dupa));

const czyjesttarta = connect();
dupa.use(serveStatic('czyjesttarta.pl/public'));
app.use(vhost('czyjesttarta.pl', czyjesttarta));

const oktorejjestobiad = connect();
dupa.use(serveStatic('oktorejjestobiad.pl'));
app.use(vhost('oktorejjestobiad.pl', oktorejjestobiad));

const indexApp = connect();
dupa.use(serveStatic('app'));
app.use(vhost('145.239.91.188', indexApp));

app.listen(80);