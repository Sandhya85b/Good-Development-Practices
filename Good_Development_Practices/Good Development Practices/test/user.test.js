const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");
const userModel = require("../models/user.model");
require("dotenv").config({ path: ".env.testing" });

beforeAll(async () => {
  await mongoose.connect(process.env.testing.MONGO_URL);
});
afterAll(async () => {
  await mongoose.connection.close();
});

test("verify whether getting all users or not", async () => {
  const res = await request(app).get("/users/");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBeTruthy();
});
