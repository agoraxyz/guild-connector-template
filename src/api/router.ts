import { Router } from "express";
import config from "../config";
// import controller from "./controller";

const createRouter = () => {
  const router: Router = Router();

  router.get("/healthcheck", async (req, res) => {
    res.status(200).json(config.instanceInfo);
  });

  return router;
};

export default createRouter;
