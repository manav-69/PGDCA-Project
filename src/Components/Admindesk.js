import React from "react";
import "../styles/admindesk.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();

  return (
    <div className="admin-container">

      <h2 className="title">Admin Dashboard</h2>

      <div className="button-box">

        <button onClick={() => navigate("/admin/status")}>
          Complaint Status
        </button>

        <button onClick={() => navigate("/admin/feedback")}>
          View Feedback
        </button>

        <button onClick={() => navigate("/admin/complaints")}>
          View Complaints
        </button>

      </div>

    </div>
  );
}

export default AdminDashboard;