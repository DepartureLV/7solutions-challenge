import { RequestHandler, Router } from "express";
import { getDepartment } from "../controller/departmentController";

const departmentRoutes: Router = Router();

departmentRoutes.get("/", getDepartment as RequestHandler);

export default departmentRoutes;
