import app from '../out/app'
const request = require("supertest")

describe("Express Server Root", () => {
  test("Stats Code should return 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});