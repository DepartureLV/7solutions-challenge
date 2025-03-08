import { Request, Response } from "express";
import fetchUserData from "../services/userService";
import convertToDepartmentData from "../utils/handleDepartmentData";

export async function getDepartment(_req: Request, res: Response) {
  try {
    const data = await fetchUserData();

    const result = convertToDepartmentData(data.users);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}
