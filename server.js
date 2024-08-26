const express = require('express')
const Datastore = require('nedb')
const socket = require('socket.io')
const fetch = require('node-fetch')
const path = require('path')


var app = express();
app.use(express.static('dist'));

const port = process.env.PORT || 80

var server = app.listen(port, () => console.log(`Listening on ${port}`));
var io = socket(server);

console.log("It's working! It's working!");

var entire = new Datastore({
  filename: 'CF.db',
  autoload: true
});

// entire.remove({ $not: { db: 'metaDiscourse' }}, { multi: true }, function (err, numRemoved) {
// });


// entire.find({}, (err, docs) => {
//   if (err) {
//     console.log("couldn't change database...")
//     response.end();
//     return;
//   }
//
// console.log(docs.length)
//
// for(let each in docs){
//   if(docs[each].p.y > 8000){
//     let thisU = docs[each].u
//     let nextY = docs[each].p.y -4000
//     let nextX = docs[each].p.x
//     let newPos = {x:nextX,y:nextY}
//
//     entire.update({ u: thisU }, { $set: { p: newPos } }, {}, function (){})
//
//   }
//
//
//
// }
// })



















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
