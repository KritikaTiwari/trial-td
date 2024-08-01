const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const path = require("path");
app.use(express.json());
app.use(cors());
//routes
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const guardRoute = require("./routes/guardRoute");
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/guard", guardRoute);

//static file

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = process.env.PORT || 5001;

//listen port
app.listen(port, () => console.log(`Node server started on on port ${port}`));
