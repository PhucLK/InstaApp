//25-02-2022

require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/dbconnection");
const cors = require("cors");
//https://heynode.com/tutorial/what-express-nodejs-framework/
const app = express();
//body parser : Returns middleware that only parses json
app.use(express.json());
// cors
// Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources
// located outside of a given domain
app.use(cors());
app.use(express.json());

const server_port = process.env.APP_PORT || 8001;
app.listen(server_port, function () {
  console.log("Listening on port %d", server_port);
});

//connect DB

connectDB();

app.get("/", (request, respon, next) => {
  respon.status(200).json({
    status: " success",
  });
});
