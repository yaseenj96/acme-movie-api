const { expect } = require("chai");
const request = require("supertest");
const server = require("../app");

//Test the first test
describe("test", () => {
  it("should return true", () => {
    const truthy = false;

    expect(truthy).to.equal(false);
  });
});

//IMPLEMENT TEST WITH SUPERTEST
request(server)
  .get("/")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });
