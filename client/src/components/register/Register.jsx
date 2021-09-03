import React from "react";
import useStyles from "../ComponentsStyle";

function Register() {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <div className={classes.loginWrapper}>
        <div className={classes.loginLeft}>
          <h3 className={classes.loginLogo}>PlayGround</h3>
          <span className={classes.loginDesc}>
            Connect with friends and the world around you on playGround
          </span>
        </div>

        <div className={classes.loginRight}>
          <div className={classes.loginBox}>
            <input placeholder="Email" className={classes.loginInput} />

            <input placeholder="Password" className={classes.loginInput} />
            <input
              placeholder="Confirm Password"
              className={classes.loginInput}
            />

            <button className={classes.loginBtn}>Sign Up</button>
            {/* <span className={classes.loginForgot}>Forgot Password?</span> */}

            {/* <button className={classes.loginRegistration}>
              Create a New Account
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
