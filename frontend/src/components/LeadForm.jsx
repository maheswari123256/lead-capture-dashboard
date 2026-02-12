import { useState } from "react";
import { createLead } from "../api/leadApi";
import "../styles/form.css";

function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source: "Website"
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setMsg("Name and Email required");
      return;
    }

    try {
      setLoading(true);
      await createLead(form);
      setMsg("Lead Created Successfully");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        source: "Website"
      });
    } catch (err) {
      setMsg("Error submitting lead");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h2>Create Lead</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
      <select name="source" value={form.source} onChange={handleChange}>
        <option>Website</option>
        <option>Instagram</option>
        <option>Referral</option>
        <option>Other</option>
      </select>
      <button type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
      {msg && <p>{msg}</p>}
    </form>
  );
}

export default LeadForm;
