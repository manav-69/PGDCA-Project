import React from "react";
import "../styles/login.css";

function Login() {
    return (<>

        <div className="container">
            <div className="login-box">
                <img
                src="https://msu-new-2023-ec2-ubuntu-unzip.s3.ap-south-1.amazonaws.com/asset/storage/slider/techo.jpg"
                alt="logo"
                className="logo"
                />
                <h2>Login</h2>

                <form>

                    <label>Login As</label>
                    <select required>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>


                    <label>PRN No.</label>
                    <input type="text" placeholder="Enter PRN Number" maxLength={10} required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" maxLength={16} minLength={8} required />

                    <a href="" className="forgot">Forgot Password?</a>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </>
    );
}

export default Login;