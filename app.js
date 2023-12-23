const express = require('express');
const app = express();
const port = 80;

app.get('/', async (req, res) => {
  res.send("Hello World!");
})

app.get('/health', (req, res) => {
  res.status(200).send("Success Heatlth Check");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
