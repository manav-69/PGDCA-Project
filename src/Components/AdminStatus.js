import React from "react";
import "../styles/admindesk.css";
import { useNavigate } from "react-router-dom";

function AdminStatus() {

  const navigate = useNavigate();

  const complaints = [
    { id: 101, title: "WiFi Issue", status: "Pending" },
    { id: 102, title: "Mess Food", status: "Resolved" },
    { id: 103, title: "Water Problem", status: "In Progress" }
  ];

  return (
    <div className="admin-container">

      <h2>Complaint Status</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Complaint</th>
          <th>Status</th>
        </tr>

        {complaints.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.title}</td>
            <td>{c.status}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => navigate("/admin")}>Back</button>

    </div>
  );
}

export default AdminStatus;