const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("responds with Welcome to CI/CD Exercise of CS101!", (done) => {
    request(app).get("/").expect("Welcome to CI/CD Exercise of CS101", done);
  });
});
