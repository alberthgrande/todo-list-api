import request from "supertest";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import jwt from "jsonwebtoken";
import app from "../app";
import Todo from "../models/Todo";

let mongoServer: MongoMemoryServer;
let token: string;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);

  // ✅ Create valid JWT for testing
  token = jwt.sign(
    { userId: "test-user-id" },
    process.env.JWT_SECRET || "yourSecret",
    { expiresIn: "1h" }
  );
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Todo.deleteMany({});
});

describe("POST /api/todos", () => {
  it("should create a new todo", async () => {
    const res = await request(app)
      .post("/api/todos")
      .set("Authorization", `Bearer ${token}`) // ✅ Send valid token!
      .send({ title: "Test Todo", description: "This is a test." });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Todo");
  });
});

describe("GET /api/todos", () => {
  it("should return all todos with pagination info", async () => {
    // ✅ Use 'description' not 'content'
    await Todo.create([
      { title: "Todo 1", description: "Description 1" },
      { title: "Todo 2", description: "Description 2" },
    ]);

    const res = await request(app)
      .get("/api/todos?page=1&limit=1")
      .set("Authorization", `Bearer ${token}`); // If GET is protected too

    expect(res.status).toBe(200);
    expect(res.body.totalItems).toBe(2);
    expect(res.body.data.length).toBe(1);
  });
});
