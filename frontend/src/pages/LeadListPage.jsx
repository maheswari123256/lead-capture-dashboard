import { useEffect, useState } from "react";
import { getLeads } from "../api/leadApi";
import LeadTable from "../components/LeadTable";
import SearchBar from "../components/SearchBar";
import AnalyticsChart from "../components/AnalyticsChart";
import Loader from "../components/Loader";

function LeadListPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await getLeads();
      setLeads(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Leads</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <AnalyticsChart leads={leads} />
      <LeadTable leads={filteredLeads} />
    </div>
  );
}

export default LeadListPage;
