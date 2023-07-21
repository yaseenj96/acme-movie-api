const { expect } = require("chai");

//Test the first test
describe("test", () => {
  it("should return true", () => {
    const truthy = true;

    expect(truthy).to.equal(true);
  });
});
