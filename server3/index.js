const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpPort = {
  server1: "4567",
  server2: "5372"
};

const postMessage = async (port, body) => {
  try {
    return await axios.post('http://172.17.0.1:' + port, body);
  } catch (error) {
    console.error(error);
  }
};

app.post('/', function (req, res) {
  let port = (httpPort.server1 === req.body.port) ? httpPort.server2 : httpPort.server1;
  postMessage(port, req.body).then(function (result) {
    console.log(result);
    return result;
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
