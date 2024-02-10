const express = require("express");
const db = require("./database/index.js");
const estateRoutes = require("./routes/estateRoutes.js")
const PORT = 8000;
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded("../"));
app.use(express.static(__dirname + "/../client/dist"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});