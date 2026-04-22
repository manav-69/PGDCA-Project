import React from "react";
import "../styles/feedback.css";
import { useNavigate } from "react-router-dom";

function FeedbackPage() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback Submitted Successfully!");
  };

  return (
    <div className="feedback-container">

      <div className="feedback-box">

        <h2>Feedback</h2>

        <form onSubmit={handleSubmit}>

          {/* Rating */}
          <label>Rating</label>
          <select required>
            <option value="">Select Rating</option>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
          </select>

          {/* Message */}
          <label>Your Feedback</label>
          <textarea
            placeholder="Write your feedback..."
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

export default FeedbackPage;