import { Link } from "react-router-dom";
import "../styles/table.css";

function LeadTable({ leads }) {
  return (
    <table className="lead-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Source</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>
              <Link to={`/leads/${lead._id}`}>{lead.name}</Link>
            </td>
            <td>{lead.email}</td>
            <td>{lead.source}</td>
            <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeadTable;
