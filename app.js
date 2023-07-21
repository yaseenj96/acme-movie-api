const path = require("path");
const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//static middleware
server.use("/dist", express.static(path.join(__dirname, "../dist")));
server.use(express.static(path.join(__dirname, "../public")));

//Send index.html
server.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = server;
