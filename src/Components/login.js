import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

function Login() {
  const dispatch = useDispatch();

  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const [locked, setLocked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login({ role, userId }));

    window.location.href = "/complaint";
  };

  return (
    <div className="container">
      <div className="login-box">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <label>Login As</label>
          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setUserId(""); // clear input
              setLocked(true); // lock dropdown
            }}
            disabled={locked}
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="admin">HOD</option>
          </select>

          {/* PRN Field */}
          {role === "student" && (
            <>
              <label>PRN No.</label>
              <input
                type="text"
                placeholder="Enter PRN Number"
                maxLength={10}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </>
          )}

          {/* Employee Field */}
          {(role === "staff" || role === "admin") && (
            <>
              <label>Employee ID</label>
              <input
                type="text"
                placeholder="Enter Employee ID"
                maxLength={5}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </>
          )}

          {/* Password */}
          {role && (
            <>
              <label>Password</label>
              <input type="password" placeholder="Enter Your Password" required />

              <Link className="forgot" to="/forgot">
                Forgot Password?
              </Link>

              <button type="submit">Login</button>
            </>
          )}

          {/* Change Role */}
          {locked && (
            <button
              type="button"
              onClick={() => {
                setRole("");
                setUserId("");
                setLocked(false);
              }}
            >
              Change Role
            </button>
          )}

        </form>
      </div>
    </div>
  );
}

export default Login;