const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method with status code 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response in body with json object", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.body).toMatchObject({"status":"OK"});
        done();
      });
  });
});