const express = require("express");
const { PORT } = require("./config/config");
const setUp = require("./config/express");

const app = express();
setUp(app);
require("./config/mongoose");

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}..`));