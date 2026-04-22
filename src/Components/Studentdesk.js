import React from "react";
import "../styles/studentdesk.css";
import { useNavigate } from "react-router-dom";

function StudentDashboard() {
    const navigate = useNavigate();
  return (
    <div className="student-container">

      {/* Heading */}
      <h2 className="title">Student Dashboard</h2>

      {/* Buttons Section */}
      <div className="button-box">

        <button className="btn" onClick={() => navigate("/complaint")}>
          Register Complaint
        </button>

        <button className="btn" onClick={() => navigate("/status") }>
          Status Check
        </button>

        <button className="btn" onClick={() => navigate("/feedback")}>
          Feedback
        </button>

      </div>

    </div>
  );
}

export default StudentDashboard;