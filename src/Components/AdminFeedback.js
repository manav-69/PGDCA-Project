import React from "react";
import "../styles/admindesk.css";
import { useNavigate } from "react-router-dom";

function AdminFeedback() {

  const navigate = useNavigate();

  const feedbacks = [
    { id: 1, rating: "⭐⭐⭐⭐", message: "Good service" },
    { id: 2, rating: "⭐⭐⭐", message: "Average response" }
  ];

  return (
    <div className="admin-container">

      <h2>Feedback List</h2>

      <table>
        <tr>
          <th>ID</th>
          <th>Rating</th>
          <th>Message</th>
        </tr>

        {feedbacks.map((f) => (
          <tr key={f.id}>
            <td>{f.id}</td>
            <td>{f.rating}</td>
            <td>{f.message}</td>
          </tr>
        ))}
      </table>

      <button onClick={() => navigate("/admin")}>Back</button>

    </div>
  );
}

export default AdminFeedback;