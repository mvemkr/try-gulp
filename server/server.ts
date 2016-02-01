import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import _ = require('underscore');

var port: number = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use(bodyParser.text({
    type: 'text/plain'
}));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);

app.get('/api/chords', function(request, response){
    var chords = [
        {
            title: 'Location',
            type: 'major'
        }
    ];

   response.send(_.filter(chords, function(a){
       return a.type === request.params.type;
   }));
});


var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});