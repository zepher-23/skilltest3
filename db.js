
var mongoose = require('mongoose');
//Set up default mongoose connection
var url =
  'mongodb+srv://auth2:erINp3lhkFOjf1g8@cluster0.nmn5cih.mongodb.net/hospital?retryWrites=true&w=majority';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connect', () => {
    console.log("connected to mongodb")
})

db.on('disconnect', () => {
    console.log('mongodb disconnected')
})

db.on('connecting', (err) => {
  console.log('Connecting to database .....');
});
db.on('error', (err) => {
    console.log("error connecting to database: ",err)
})


module.exports = db