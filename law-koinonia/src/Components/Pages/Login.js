import React, { useState } from "react";
import global from "../../assets/images/logo/glob.png";
import lowyer from "../../assets/images/logo/logo.png";
import classes from "../../Styles/Login.module.css";
function Login() {
  const click = () => {};
  const [login, setLogin] = useState(true);
  const [lawyerStudent, setLawyerStudent] = useState(true);
  const [practiseCourt, setPractiseCourt] = useState(false);
  return (
    <div className={classes.profile_body}>
      <header className={classes.login_header}>
        <img src={lowyer} alt="lowyer" />
        <h1>Law Koinonia</h1>
      </header>
      <div className={classes.login_body}>
        <div className={classes.lowyer_canvas}>
          <img src={global} alt="global" />
          <h2>
            Be Together, <br />
            <span>Get In Touch</span>
          </h2>
        </div>
        {login ? (
          <div className={classes.login_panel}>
            <h1 style={{ margin: "20px", color: "#921563" }}>Login Portal</h1>
            <form action={click()} method="post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className={`${classes.user_email} ${classes.login_input}`}
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className={`${classes.user_password} ${classes.login_input}`}
              />
              <br />
              <button
                type="submit"
                className={classes.login_btn}
                onClick={() => {}}
              >
                <a href="/home" style={{ color: "white" }}>
                  Log In
                </a>
              </button>{" "}
              <br />
              <div className={classes.forget_password}>
                <a href="/">Forget-Password</a>
              </div>
              <br />
              <button
                type="submit"
                className={classes.signup_btn}
                onClick={() => {
                  setLogin(false);
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 style={{ margin: "0 20px" }}>Sign Up</h1>
            <form>
              <input
                type="text"
                placeholder="Enter First Name"
                className={classes.login_input}
              />
              <input
                type="text"
                placeholder="Enter Last Name"
                className={classes.login_input}
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className={classes.login_input}
              />
              <input
                type="number"
                placeholder="Enter Your Phone Number"
                className={classes.login_input}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className={classes.login_input}
              />
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
                className={classes.login_input}
              />
              <div className={classes.control}>
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    margin: "5px 30px",
                  }}
                >
                  Are You Lawyer Student
                </p>
                <label className={classes.radio}>
                  <input
                    type="radio"
                    name="student_answer"
                    value="yes"
                    onChange={(e) => {
                      setLawyerStudent(true);
                    }}
                  />
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 30px",
                    }}
                  >
                    Yes
                  </p>
                </label>
                <label className={classes.radio}>
                  <input
                    type="radio"
                    name="student_answer"
                    value="no"
                    onChange={(e) => {
                      setLawyerStudent(false);
                    }}
                  />
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 30px",
                    }}
                  >
                    No
                  </p>
                </label>
              </div>

              {lawyerStudent ? (
                ""
              ) : (
                <div className={classes.control}>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "5px 30px",
                    }}
                  >
                    Are You Practise In Court
                  </p>
                  <label className={classes.radio}>
                    <input
                      type="radio"
                      name="practise_lawyer_answer"
                      value="yes"
                      onChange={(e) => {
                        setPractiseCourt(true);
                      }}
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "black",
                        margin: "0 30px",
                      }}
                    >
                      Yes
                    </p>
                  </label>
                  <label className={classes.radio}>
                    <input
                      type="radio"
                      name="practise_lawyer_answer"
                      value="no"
                      onChange={(e) => {
                        setPractiseCourt(false);
                      }}
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        color: "black",
                        margin: "0 30px",
                      }}
                    >
                      No
                    </p>
                  </label>
                </div>
              )}
              {lawyerStudent ? (
                ""
              ) : practiseCourt ? (
                <input
                  type="text"
                  placeholder="Enter Your Practise Court Name"
                  className={classes.login_input}
                />
              ) : (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "black",
                      margin: "0 20px",
                    }}
                  >
                    Enter Your Bar ID:{" "}
                  </p>
                  <input
                    type="text"
                    name="barid"
                    style={{
                      width: "240px",
                      height: "40px",
                      margin: "0 20px",
                      borderRadius: "15px",
                    }}
                  />
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center" }}>
                <button type="submit" className={classes.sign_up_submit}>
                  Sign Up
                </button>
                <button
                  style={{ backgroundColor: "transparent", color: "black" }}
                  onClick={() => {
                    setLogin(true);
                  }}
                >
                  Have Already an Account ?
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
