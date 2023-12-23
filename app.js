const express = require('express');
const app = express();
const port = 80;

app.get('/', async (req, res) => {
  const response = await axios.put('http://169.254.169.254/latest/api/token', null, {
    headers: {
      'X-aws-ec2-metadata-token-ttl-seconds': 21600
    }
  });
  const token = response.data;
  const metaDataResponse = await axios.get('http://169.254.169.254/latest/meta-data/', {
    headers: {
      'X-aws-ec2-metadata-token': token
    }
  });
  res.send(metaDataResponse.data);
})

app.get('/health', (req, res) => {
  res.status(200).send("Success Heatlth Check");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
