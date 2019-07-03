var http = require('http');
var dt = require('../get_started/myfirstmodule');
var url = require('url');
http.createServer(
    function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        var uri = req.url;
        var query = url.parse(uri, true).query;
        res.write(req.url + "; " + query.year + "," + query.month + ",xx:" + dt.myDateTime());
        res.end();
    }
).listen(8080);