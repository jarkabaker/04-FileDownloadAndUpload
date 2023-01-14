const express = require("express");
const bodyParser = require("body-parser");

const fileRoutes = require("./routes/file");

const app = express();

app.use(bodyParser.json());

app.use("/file", fileRoutes);

app.listen(8080);
