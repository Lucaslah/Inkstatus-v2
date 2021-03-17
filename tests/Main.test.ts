import { expect } from '@jest/globals';
import { InkStats } from "../dist/module"
import app from '../dist/app'
import { totalRam } from "../src/stats"
const request = require("supertest")

describe("[CLI] Express Server Root", () => {
  test("Stats Code should return 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("[MODULE] Module Info", () => {
    test("Name, Port and Message should be Correct", done => {
      const server = new InkStats({
        name: 'Test',
        port: 7777,
        message: 'Testing'
      })
      expect(server.name).toBe('Test')
      expect(server.port).toBe(7777)
      expect(server.message).toBe('Testing')
      done()
    });
  });


