import request from "supertest";
import express from "express";
import router from "../../router";
import UserManagementService from "../../../service/user-management/user-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/user-management/user-management-service");

describe("user-management route", () => {
  describe("create new user request function", () => {
    test("create new user request", async () => {
      jest.spyOn(UserManagementService, "addUser").mockReturnValueOnce(
        Promise.resolve({
          email: "sysco@gmail.com",
          password:
            "$2b$10$d1wx6r5Ai/Mcj8m0p9qbv.oFaim3seKIvJdNC/avWjO2E3P1vh0zu",
        })
      );

      const response = await request(app)
        .post(`/users/signup`)
        .send({
          email: "user@gmail.com",
          password: "user$123",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });

  describe("login user function", () => {
    test("login user request", async () => {
      jest.spyOn(UserManagementService, "loginUser").mockReturnValueOnce(
        Promise.resolve({
          message: "Auth Successful",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNAZ21haWwuY29tIiwidXNlcklkIjoiNjNjYTA4ZDE5MGI4ZDdmZWE0OTQ4OWYyIiwiaWF0IjoxNjc0Mzk1ODE1LCJleHAiOjE2NzQzOTk0MTV9.0jiIi1aLJ_-hilHzqrqmEYwza4JfKcfXCniFyYA3Des",
        })
      );

      const response = await request(app)
        .post(`/users/login`)
        .send({
          email: "user@gmail.com",
          password: "user$123",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
