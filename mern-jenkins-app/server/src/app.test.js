const test = require("node:test");
const assert = require("node:assert");
const request = require("supertest");
const app = require("./index");

test("GET /api/health returns service status", async () => {
  const response = await request(app).get("/api/health");

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.status, "ok");
  assert.equal(response.body.service, "mern-jenkins-server");
});
