const connect = require('connect');
const serveStatic = require('serve-static');
const vhost = require('vhost');
var app = connect();

const dupa = connect();
dupa.use(serveStatic('dupa'));
app.use(vhost('dupa.local', dupa));

const czyjesttarta = connect();
czyjesttarta.use(serveStatic('czyjesttarta.pl/public'));
app.use(vhost('czyjesttarta.pl', czyjesttarta));

const oktorejjestobiad = connect();
oktorejjestobiad.use(serveStatic('oktorejjestobiad.pl'));
app.use(vhost('oktorejjestobiad.pl', oktorejjestobiad));

const indexApp = connect();
indexApp.use(serveStatic('oktorejjestobiad-graphql/docs'));
app.use(vhost('145.239.91.188', indexApp));

app.listen(80);