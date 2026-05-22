import type { Request, Response } from "express";
import { authService } from "./auth.service";

export const userCreate = async (req: Request, res: Response) => {
  const result = await authService.createUserDB(req.body);
  console.log(result);
  try {
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};
