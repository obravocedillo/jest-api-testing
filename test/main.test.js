const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
    test("It should response the GET method with status 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
  });