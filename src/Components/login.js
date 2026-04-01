import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const handleLogin = (e) => {
        e.preventDefault();

        window.location.href = "/complaint";
    }


    return (<>


        <div className="container">
            <div className="login-box">
                <img
                src="https://msu-new-2023-ec2-ubuntu-unzip.s3.ap-south-1.amazonaws.com/asset/storage/slider/techo.jpg"
                alt="logo"
                className="logo"
                />

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <label>Login As</label>

                    <select required>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>


                    <label>PRN No.</label>
                    <input type="number" placeholder="Enter PRN Number" maxLength={10} required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" maxLength={16} minLength={8} required />

                    <Link className="forgot" to="/forgot">Forgot Password?</Link>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </>
    );
}

export default Login;