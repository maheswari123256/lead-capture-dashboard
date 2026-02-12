import express from "express";
import {
  createLead,
  getLeads,
  getLeadById
} from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.get("/:id", getLeadById);

export default router;
