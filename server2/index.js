const express = require('express');
const app = express();
const axios = require('axios');

const getPing = async () => {
  try {
    return await axios.get('http://127.0.0.1:4567/');
  } catch (error) {
    console.error(error);
  }
};

app.get('/', function (req, res) {
  getPing().then(function (result) {
    console.log(result.data.data);
    return result.data.data;
  });

  res.json({
    data: "pong"
  })
});

app.listen(5372, function () {
  console.log('Example app listening on port 5372!');
});
