
var mongoose = require('mongoose');
//Set up default mongoose connection
var url =
  'mongodb+srv://auth2:erINp3lhkFOjf1g8@cluster0.nmn5cih.mongodb.net/hospital?retryWrites=true&w=majority';

  //connect to the mongodb cluster
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// retrieve details about the connection
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

// export the db details 
module.exports = db