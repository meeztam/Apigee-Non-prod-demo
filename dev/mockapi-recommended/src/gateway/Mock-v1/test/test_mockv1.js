const request = require("supertest")("https://mocktarget.apigee.net");
const expect = require("chai").expect;

describe("GET /v1/mock", function () {
  it("returns mockv1 as output", async function () {
    const response = await request.get("/v1/mock");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(1);
  });
});