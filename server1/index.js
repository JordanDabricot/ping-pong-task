const express = require('express');
const app = express();
const axios = require('axios');

const getPong = async () => {
  try {
    return await axios.get('http://127.0.0.1:5372/');
  } catch (error) {
    console.error(error);
  }
};

app.get('/', function (req, res) {
  getPong().then(function (result) {
    console.log(result.data.data);
    return result.data.data;
  });

  res.json({
    data: "ping"
  });
});

app.listen(4567, function () {
  console.log('Example app listening on port 4567!');
});
