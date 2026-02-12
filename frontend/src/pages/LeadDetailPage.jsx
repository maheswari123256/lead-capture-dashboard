import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeadById } from "../api/leadApi";
import Loader from "../components/Loader";

function LeadDetailPage() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    fetchLead();
  }, []);

  const fetchLead = async () => {
    const res = await getLeadById(id);
    setLead(res.data);
  };

  if (!lead) return <Loader />;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Lead Detail</h2>
      <p><b>Name:</b> {lead.name}</p>
      <p><b>Email:</b> {lead.email}</p>
      <p><b>Phone:</b> {lead.phone}</p>
      <p><b>Company:</b> {lead.company}</p>
      <p><b>Message:</b> {lead.message}</p>
      <p><b>Source:</b> {lead.source}</p>
      <p><b>Created:</b> {new Date(lead.createdAt).toLocaleString()}</p>
    </div>
  );
}

export default LeadDetailPage;
