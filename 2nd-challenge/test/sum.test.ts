import { beforeAll, describe, expect, test } from "@jest/globals";
import dotenv from "dotenv";
import mock from "./mock";
import { DepartmentsData } from "../types/user";
import convertToDepartmentData from "../utils/handleDepartmentData";

dotenv.config();

const BASE_URL = `http://localhost:${process.env.PORT || 8080}`;

describe("setup testing", () => {
  test("Hello Test", () => {
    expect("hello").toEqual("hello");
  });
});

describe("GET /api/department", () => {
  let data: DepartmentsData;
  let res: globalThis.Response;

  beforeAll(async () => {
    res = await fetch(`${BASE_URL}/api/department`, {
      method: "GET",
    });

    data = await res.json();
  });

  test("should return status 200", async () => {
    console.log("res", res);
    expect(res.status).toEqual(200);
  });

  test("should return JSON object", async () => {
    expect(typeof data === "object").toBe(true);
  });
});

describe("convertToDepartmentData", () => {
  const mockData = mock;
  const data = convertToDepartmentData(mockData.users);

  test('should return object with 2 departments which is "Engineering" and "Support"', async () => {
    expect(Object.keys(data).length).toEqual(2);
    expect(data).toHaveProperty("Engineering");
    expect(data).toHaveProperty("Support");
  });

  test('should return object with "male" property', async () => {
    const result = Object.values(data).every(
      (department) => "male" in department
    );

    expect(result).toBe(true);
  });

  test("should return correct 'male' count", async () => {
    expect(data.Engineering.male).toEqual(0);
    expect(data.Support.male).toEqual(1);
  });

  test('should return object with "female" property', async () => {
    const result = Object.values(data).every(
      (department) => "female" in department
    );

    expect(result).toBe(true);
  });

  test("should return correct 'female' count", async () => {
    expect(data.Engineering.female).toEqual(1);
    expect(data.Support.female).toEqual(0);
  });

  test('should return object with "ageRange" property', async () => {
    const result = Object.values(data).every(
      (department) => "ageRange" in department
    );

    expect(result).toBe(true);
  });

  test("should return correct 'ageRange'", async () => {
    expect(data.Engineering.ageRange).toEqual("28-28");
    expect(data.Support.ageRange).toEqual("35-35");
  });

  test('should return object with "hair" property', async () => {
    const result = Object.values(data).every(
      (department) => "hair" in department
    );

    expect(result).toBe(true);
  });

  test("should return correct 'hair' data", async () => {
    expect(data.Engineering.hair).toEqual({
      Brown: 1,
    });
    expect(data.Support.hair).toEqual({
      Green: 1,
    });
  });

  test('should return object with "addressUser" property', async () => {
    const result = Object.values(data).every(
      (department) => "addressUser" in department
    );

    expect(result).toBe(true);
  });

  test("should return correct 'address' data", async () => {
    expect(data.Engineering.addressUser).toEqual({
      EmilyJohnson: "29112",
    });
    expect(data.Support.addressUser).toEqual({
      MichaelWilliams: "38807",
    });
  });
});
