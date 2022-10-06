const express = require("express");

const app = express();

app.listen(3000, () => console.log("Port 3000 is listening for requests"));

app.use(express.static('public'));