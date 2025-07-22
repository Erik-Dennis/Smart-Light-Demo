const { error } = require('console');
const { stdout, stderr } = require('process');
const app = require('express')();
const execFile = require('child_process').execFile;
const LEDon = '/home/nerp/Scripts/LEDon.py';
const LEDoff = '/home/nerp/Scripts/LEDoff.py';
const PORT = 8080;
const cors = require('cors');
LEDstatus = "default";


app.use(cors({ origin: '*'}));

app.listen(
    PORT,
    () => console.log(`Listening on port: ${PORT}`)
);


app.post('/LEDstatus/SetOn', (req, res) => {
    LEDstatus = "on"
    execFile(LEDon, error, stdout, stderr)
    res.status(202).send({
        LED: LEDstatus        
    })
    
});

app.post('/LEDstatus/SetOff', (req, res) => {
    LEDstatus = "off"
    execFile(LEDoff, error, stdout, stderr)
    res.status(205).send({
        LED: LEDstatus
    })
});


// Websocket

const Websocket = require('ws');
const server = new Websocket.Server({port: 8081});

server.on('connection', socket => {
    socket.send('Web Socket Session initiated');
    socket.send(LEDstatus);
    
    

    socket.on('message', function message(data) {
        nClients = 0;
        if(data == "on" || data == "off"){
            server.clients.forEach(function each(client) {
            if (client !== server && client.readyState === socket.OPEN) {
                nClients+=1;
                client.send(LEDstatus);
                console.log('Client' +nClients + ': ' + LEDstatus)

                }}
            );
        }
    }
);
});