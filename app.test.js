// app.test.js
const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty(
      "message",
      "Welcome to the Node API Service!"
    );
  });
});

describe("GET /api", () => {
  it("should return API working message", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "API endpoint is working fine!");
  });
});
