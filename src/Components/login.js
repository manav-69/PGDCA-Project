import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const handleRoleChange = (e) => {
    const value = e.target.value;

    const prnField = document.getElementById("prn-field");
    const empField = document.getElementById("emp-field");
    const roleSelect = document.getElementById("role-select");

    if (value === "student") {
        prnField.style.display = "block";
        empField.style.display = "none";
    } else if (value === "staff" || value === "admin") {
        prnField.style.display = "none";
        empField.style.display = "block";
    } 

    if (value != ""){
        roleSelect.disabled = true;
    }
};

function Login() {
    const handleLogin = (e) => {
        e.preventDefault();

        window.location.href = "/complaint";
    }


    return (<>


        <div className="container">
            <div className="login-box">

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <label>Login As</label>

                    <select id="role-select" onChange={handleRoleChange} required>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="staff">Staff</option>
                        <option value="admin">Admin</option>
                    </select>

                    {/* PRN Field */}
                    <div id="prn-field" style={{display : "none"}}>
                        <label>PRN No.</label>
                        <input type="number" placeholder="Enter PRN Number" maxLength={10} required />
                        <label>Password</label>
                    <input type="password" placeholder="Enter Password" maxLength={16} minLength={8} required />
                    <Link className="forgot" to="/forgot">Forgot Password?</Link>

                    <button type="submit">Login</button>
                    </div>

                    {/* Employee Field */}
                    <div id="emp-field" style={{display : "none"}}>
                        <label>Employee Id</label>
                        <input type="number" placeholder="Enter Your Id" maxLength={5} required />
                        <label>Password</label>
                    <input type="password" placeholder="Enter Employee Id Password" maxLength={16} minLength={8} required />
                    <Link className="forgot" to="/forgot">Forgot Password?</Link>

                    <button type="submit">Login</button>
                    </div>


                    

                    
                </form>
            </div>
        </div>
    </>
    );
}

export default Login;