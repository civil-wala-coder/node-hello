const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/hello', (req, res) => {

  res.send({'data':'make easy private repo !!'});
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
