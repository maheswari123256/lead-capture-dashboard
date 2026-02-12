import Lead from "../models/Lead.js";
import axios from "axios";

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    // Send webhook
    try {
      await axios.post(process.env.WEBHOOK_URL, {
        name: lead.name,
        email: lead.email,
        source: lead.source,
        created_at: lead.createdAt
      });
    } catch (webhookError) {
      console.error("Webhook failed");
      return res.status(500).json({ message: "Webhook failed" });
    }

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeads = async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
};

export const getLeadById = async (req, res) => {
  const lead = await Lead.findById(req.params.id);
  res.json(lead);
};
