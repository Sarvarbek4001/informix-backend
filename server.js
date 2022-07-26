const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./src/config");
const router = require("./src/modules/router");
// const bodyParser = require("body-parser");
app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// app.use(
//   bodyParser.json({
//     limit: "50mb",
//   })
// );

// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     parameterLimit: 100000,
//     extended: true,
//   })
// );

app.use(router);

app.listen(PORT, () => {
  console.log(`${PORT} is listening...`);
});
