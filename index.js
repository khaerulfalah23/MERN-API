const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello reno");
  console.log("hello 2");
  console.log("reno");
});

app.listen(4000);
