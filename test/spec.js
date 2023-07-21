const { expect } = require("chai");

//Test the first test
describe("test", () => {
  it("should return true", () => {
    const truthy = false;

    expect(truthy).to.equal(false);
  });
});
