const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sendData = {
  data: "pong",
  port: "5372"
};

const postPong = async () => {
  try {
    return await axios.post('http://172.17.0.1:8080/', sendData);
  } catch (error) {
    console.error(error);
  }
};

app.get('/', function (req, res) {
  postPong().then(function (result) {
    console.log(result.data);
    return result.data;
  });

  res.json(sendData);
});

app.post('/', function (req, res) {
   console.log(req.body.data);
  postPong().then(function (result) {
    console.log(result.data);
    return result.data;
  });
});

app.listen(5372, function () {
  console.log('Example app listening on port 5372!');
});
