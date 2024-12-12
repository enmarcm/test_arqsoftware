import { Router } from "express";
import MainController from "../controllers/main";

export const MainRouter = Router();

MainRouter.get("/", MainController.obtainAllRegisters)
MainRouter.get("/api", MainController.ingresarNombre)