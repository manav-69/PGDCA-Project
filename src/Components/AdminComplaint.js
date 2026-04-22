import React from "react";
import "../styles/admindesk.css";
import { useNavigate } from "react-router-dom";

function AdminComplaints() {

  const navigate = useNavigate();

  const complaints = [
    { id: 101, name: "Rahul", userId: "220101", issue: "WiFi Issue" },
    { id: 102, name: "Amit", userId: "220102", issue: "Mess Food" }
  ];

  return (
    <div className="admin-container">

      <h2>All Complaints</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User ID</th>
          <th>Issue</th>
        </tr>

        {complaints.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.userId}</td>
            <td>{c.issue}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => navigate("/admin")}>Back</button>

    </div>
  );
}

export default AdminComplaints;