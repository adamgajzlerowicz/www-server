const connect = require('connect');
const serveStatic = require('serve-static');
const vhost = require('vhost');
var app = connect();

// const czyjesttarta = connect();
// czyjesttarta.use(serveStatic('czyjesttarta.pl/public'));
// app.use(vhost('czyjesttarta.pl', czyjesttarta));

const oktorejjestobiad = connect();
oktorejjestobiad.use(serveStatic('websites/oktorejjestobiad.pl/docs'));
app.use(vhost('www.oktorejjestobiad.pl', oktorejjestobiad));
app.use(vhost('oktorejjestobiad.pl', oktorejjestobiad));

const indexApp = connect();
indexApp.use(serveStatic('websites/app'));
app.use(vhost('145.239.91.188', indexApp));

app.listen(80);