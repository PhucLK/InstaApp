//25-02-2022

const express = require("express");
const app = express();
app.use(express.json());

const server_port = 8000;
app.listen(server_port, function () {
  console.log("Listening on port %d", server_port);
});

app.get("/", (request, respon, next) => {
  respon.status(200).json({
    status: " success",
  });
});
