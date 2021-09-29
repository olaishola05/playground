import React, { useRef } from "react";
import useStyles from "../ComponentsStyle";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
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
          <form className={classes.loginBox} onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Username"
              className={classes.loginInput}
              ref={username}
            />
            <input
              type="email"
              required
              placeholder="Email"
              className={classes.loginInput}
              ref={email}
            />

            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              className={classes.loginInput}
              ref={confirmPassword}
            />
            <input
              type="password"
              required
              minLength="6"
              placeholder="Confirm Password"
              className={classes.loginInput}
              ref={password}
            />

            <button className={classes.loginBtn} type="submit">
              Sign Up
            </button>

            <Link to="/login" style={{ alignSelf: "center" }}>
              <button className={classes.loginRegistration}>
                Login into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
