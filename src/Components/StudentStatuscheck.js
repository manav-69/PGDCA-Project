import React from "react";
import "../styles/statuscheck.css";
import { useNavigate } from "react-router-dom";

function StatusPage() {

  const navigate = useNavigate();

  // Sample complaint data
  const complaints = [
    { id: 101, title: "WiFi Issue", status: "Pending" },
    { id: 102, title: "Mess Food", status: "Resolved" },
    { id: 103, title: "Water Problem", status: "In Progress" }
  ];

  return (
    <div className="status-container">

      <div className="status-box">

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
              <td className={c.status.toLowerCase().replace(" ", "-")}>
                {c.status}
              </td>
            </tr>
          ))}

        </table>

        {/* Back Button */}
        <button
          className="back-btn"
          onClick={() => navigate("/student")}
        >
          Back
        </button>

      </div>

    </div>
  );
}

export default StatusPage;