import React from "react";
import "../styles/complaint.css";
import { useNavigate } from "react-router-dom";

function ComplaintForm() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint Submitted Successfully!");
  };

  return (
    <div className="complaint-container">

      <div className="complaint-box">

        <h2>File a Complaint</h2>

        <form onSubmit={handleSubmit}>

          {/* Complaint Type */}
          <label>Complaint Type</label>
          <select required>
            <option value="">Select Type</option>
            <option>Technical</option>
            <option>Hostel</option>
            <option>Mess</option>
            <option>Academic</option>
          </select>

          {/* Department */}
          <label>Department</label>
          <select required>
            <option value="">Select Department</option>
            <option>IT</option>
            <option>Computer</option>
            <option>Mechanical</option>
            <option>Civil</option>
          </select>

          {/* Description */}
          <label>Description</label>
          <textarea
            placeholder="Describe your issue..."
            rows="4"
            required
          ></textarea>

          {/* Buttons */}
          <div className="btn-group">

            <button type="submit">Submit</button>

            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/student")}
            >
              Back
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ComplaintForm;