const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sendData = {
  data: "ping",
  port: "4567"
};

const postPing = async () => {
  try {
    return await axios.post('http://127.0.0.1:8080/', sendData);
  } catch (error) {
    console.error(error);
  }
};

app.get('/', function (req, res) {
  postPing().then(function (result) {
    console.log(result);
  });

  res.json(sendData);
});

app.post('/', function (req, res) {
  console.log(req.body.data);
  postPing().then(function (result) {
    console.log(result.data);
    return result.data;
  });
});

app.listen(4567, function () {
  console.log('Example app listening on port 4567!');
});
