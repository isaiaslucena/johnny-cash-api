const request = require('supertest');
const app = require('../app');
const employeeMock = require('../mocks/employeeMock');
const orderLogMock = require('../mocks/orderLogMock');

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

describe("Test the route /employee", () => {
  test("It should response the GET method with status code 200", done => {
    request(app)
      .get("/employee")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response in body with json object", done => {
    request(app)
      .get("/employee")
      .then(response => {
        expect(response.body).toMatchObject([employeeMock]);
        done();
      });
  });
});

describe("Test the route /orderLog", () => {
  test("It should response the GET method with status code 200", done => {
    request(app)
      .get("/orderLog")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("It should response the payment log between 2019-09-01 and 2019-09-06", done => {
    request(app)
      .get("/orderLog?startDate=2019-09-01&endDate=2019-09-06")
      .then(response => {
        expect(response.body.length).toBe(1);
        done();
      });
  });
});