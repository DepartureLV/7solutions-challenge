import express from "express";
import dotenv from "dotenv";
import departmentRoutes from "./routes/departmentRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/api/department", departmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
