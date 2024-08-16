const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const port = process.env.EXPRESS_PORT || 3000;
app.get('/api', (req, res) => {
  res.status(200).send({message: 'helloWorld'});
});

app.get('/api/healthcheck', (req, res) => {
  MongoClient.connect(url, function(err, client) {
  if(err){
    console.error('Snap an error has been thrown : ', err);
    res.status(500).send(err);
    return;
  }

  console.log('Connection valid');
  res.status(200).send({message: 'Connection valid'});

  client.close();
});
})

const dbPort = process.env.DB_PORT || '27017';
const host = process.env.DB_HOST || 'localhost';
const dbNAme = process.env.DB_NAME;

if(!dbNAme){
  console.error('No db name provided');
  process.exit(1);
}

// Connection URL
const url = `mongodb://${host}:${dbPort}/${dbNAme}`;


app.listen(port, () => {
  console.log(`Server listenning on ${port}`);
})
