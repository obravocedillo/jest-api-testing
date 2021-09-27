require('dotenv').config()
process.env.host = 'servers-postgresql.cnqbtob29kka.us-west-2.rds.amazonaws.com'
process.env.password = 'GHA9Ajlk9S'

const request = require("supertest");
const app = require("../app");
const testingServer = {
    name: 'testing-server-jest',
    status: 1,
    uptime: new Date(),
    isActive: true
}

describe("Test the root path", () => {
    test("It should response the GET method with status 200", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

    /*
    test("It should GET the servers in the database", async () => {
        const response = await request(app).get('/get-servers');
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('name');
    });

    test("It should add testingServer to the database and then deleting the item", async () => {
        const responseGet = await request(app).get('/get-servers');
        const responsePost = await request(app).post('/add-server').send(testingServer);
        const responseGetUpdated = await request(app).get('/get-servers');
        expect(responseGetUpdated.body.length).toBeGreaterThan(responseGet.body.length);
        const responseDelete = await request(app).delete('/delete-server-name').send(testingServer);
    });
    */
  });