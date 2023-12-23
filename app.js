const express = require('express');
const app = express();
const port = 80;
const metadata = require('node-ec2-metadata');

app.get('/', (req, res) => {
  metadata.getMetadataForInstance('instance-id')
    .then((instanceId) => {
      res.send("Instance ID: " + instanceId);
    })
    .fail((error) => {
      res.send(error)
    });
})

app.get('/health', (req, res) => {
  res.status(200).send("Success Heatlth Check");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
