import React, { useContext, useRef } from "react";
import useStyles from "../ComponentsStyle";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

function Login() {
  const classes = useStyles();
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  console.log(user);
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
              type="email"
              placeholder="Email"
              required
              ref={email}
              className={classes.loginInput}
            />

            <input
              type="password"
              placeholder="Password"
              required
              minLength="6"
              ref={password}
              className={classes.loginInput}
            />

            <button className={classes.loginBtn} disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className={classes.loginForgot}>Forgot Password?</span>

            <button className={classes.loginRegistration}>
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
