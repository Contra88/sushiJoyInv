import request from "supertest";
//import porducts from "../routes/products.routes";
import app from "../app";

describe("GET /products", () => {
  test("teatea que responda status 200", async () => {
    const response = await request(app).get("/products").send();
    expect(response.statusCode).toBe(200);
  });

  test("testea un ping pong", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200);
  });
}, 10000);
