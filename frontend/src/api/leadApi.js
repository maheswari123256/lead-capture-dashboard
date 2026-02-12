import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/leads"
});

export const createLead = (data) => API.post("/", data);
export const getLeads = () => API.get("/");
export const getLeadById = (id) => API.get(`/${id}`);
