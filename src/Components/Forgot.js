import "../styles/forgot.css";

function Forgot() {
    return (
        <>
        <div className="forgotpage">
            <div className="forgot-p">
                <img
                src="https://msu-new-2023-ec2-ubuntu-unzip.s3.ap-south-1.amazonaws.com/asset/storage/slider/techo.jpg"
                alt="logo"
                className="logo"
                />

                <h2>Forgot Password</h2>

                <form>
                    <label>Phone No.</label>
                    <input type="number" className="phoneNo" placeholder="Enter Your Phone Number" maxLength={10} />
                    <label>Old Password</label>
                    <input type="password" className="oldpass" placeholder="Enter Old Password" required />
                    <label>New Password</label>
                    <input type="password" className="newpass" placeholder="Enter New Password" required/>
                    <label>Confirm Password</label>
                    <input type="password" className="conpass" placeholder="Confirm password" s required />

                    <button type="submit">Done</button>
                </form>

            </div>
            </div>
        </>
    )
}

export default Forgot;