const express = require('express')
const Datastore = require('nedb')
const socket = require('socket.io')
const fetch = require('node-fetch')
const path = require('path')


var app = express();
app.use(express.static('dist'));


var server = app.listen(80, () => console.log(`Listening`));
var io = socket(server);

console.log("It's working! It's working!");

var entire = new Datastore({
  filename: 'CF.db',
  autoload: true
});

io.on('connection', newConnection);

app.get('/:id',(req, res) => {
  res.sendFile(path.join(__dirname + '/dist/sepPrint.html'));
});

app.get('/sets/:id', (req,res) => {
  entire.find({db: req.params.id}, (err, docs) => {
    if (err) {
      console.log("error in retrieval find process...")
      response.end();
      return;
    }
    console.log("grabbed it for a print job")
    res.send(docs)
  })
})

app.get('/aTE/all', (req,res) => {
  entire.find({}, (err, docs) => {
    if (err) {
      console.log("error in retrieval find process...")
      response.end();
      return;
    }
    console.log("grabbed it for a print job")
    res.send(docs)
  })
})


function newConnection(socket) {

  console.log("a new connection!")

  socket.on('unit', data => {
    socket.broadcast.emit('unit', data)
    entire.insert(data);
  })

  socket.on('relation', data => {
      entire.update({ u: data.u }, { $push: { r: data.r } }, {}, function (){})
  })

  socket.on('mouse', data => {
    socket.broadcast.emit('mouseRep', data)
  });

  socket.on('gimmeData', data => {
    entire.find({}, (err, docs) => {
      if (err) {
        console.log("error in retrieval find process...")
        response.end();
        return;
      }
      console.log("it got grabbed")
      socket.emit('dataRep', docs)
    })
  });
}
