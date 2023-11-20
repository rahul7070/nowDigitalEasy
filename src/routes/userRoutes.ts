import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/users", userController.addUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:userId", userController.getSingleUser);
router.delete("/users/:userId", userController.deleteUser);
router.put("/users/:userId", userController.updateUser);

export default router;
