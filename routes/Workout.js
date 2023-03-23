import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is worrkouts route");
});

export default router;
