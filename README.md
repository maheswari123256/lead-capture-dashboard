# 🚀 Lead Capture Dashboard (MERN + Webhook Integration)

A full-stack Lead Capture web application built using the MERN stack.  
This project includes form validation, lead listing, webhook integration, analytics, and responsive UI.

---

## 📌 Assignment Objective

Build a Lead Capture web application and integrate it with a webhook to simulate an automation trigger.

This project demonstrates:

- UI / UX Skills
- React Fundamentals
- API Handling
- Code Structure
- Webhook Automation Understanding

---

# 🛠 Tech Stack Used

## Frontend
- React (Vite)
- React Router DOM
- Axios
- Recharts (Analytics Chart)
- CSS (Responsive Design)

## Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Axios (Webhook integration)
- dotenv
- CORS

---
# 📂 Project Structure

lead-capture-app/
│
├── backend/
│ ├── server.js
│ ├── config/db.js
│ ├── models/Lead.js
│ ├── controllers/leadController.js
│ ├── routes/leadRoutes.js
│ ├── .env
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api/
│ │ ├── context/
│ │ └── styles/


---

Setup Instructions
1. Clone Repository
git clone https://github.com/your-username/lead-capture-dashboard.git
2. Backend Setup
cd backend
npm install
Create .env file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/leadcaptureapp
WEBHOOK_URL=https://webhook.site/your-unique-id
npm run dev
3. Frontend Setup
cd frontend
npm install
npm run dev
Webhook Integration Explanation
When a new lead is submitted:
1. Frontend sends POST request to backend (/api/leads).
2. Backend saves lead in MongoDB.
3. Backend sends JSON payload to webhook URL.
Payload Format:
{
name: 'John Doe',
email: 'john@mail.com',
source: 'Website',
created_at: '2026-02-11T10:00:00'
}
If webhook fails, lead is still saved and error is logged.

UI Features
Responsive Design (Mobile + Desktop)
Clean Modern UI
Proper Spacing & Typography
Form Validation
Loading State
Success / Error Messages
Search & Filter
Analytics Chart
Dark Mode Toggle
API Endpoints
POST /api/leads
GET /api/leads
GET /api/leads/:id



