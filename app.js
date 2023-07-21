const path = require("path");
const express = require("express");
const request = require("supertest");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//routes
server.use("/api", routes);

//static middleware
server.use("/dist", express.static(path.join(__dirname, "../dist")));
server.use(express.static(path.join(__dirname, "../public")));

//Send index.html
server.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

const PORT = process.env.PORT || 8000;

//IMPLEMENT TEST WITH SUPERTEST
request(server)
  .get("/")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = server;
