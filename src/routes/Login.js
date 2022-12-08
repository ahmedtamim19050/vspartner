import React from "react";
import "../App.css";
import { useSignIn } from "react-auth-kit";
import { useState } from "react";
import requests from "../services/httpService";

function Login() {
    const baseURL = process.env.REACT_APP_API_BASE;
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    device_name: 'test',
    role_id: "3",
  });
  const signIn = useSignIn();
  return (
    <div classNameName="auth_body">
      <div className="wrapper_scroll_cmn">
        <div className="login_pages_contents">
          <img src="images/auth-page-bg.png" className="auth-page-bg" alt="" />
          <div className="login_pages_contents_left">
            <ul className="circles_animated">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="login_pages_contents_inr11">
              <div className="login_pages_contents_inr">
                <a href="dashboard.html" className="main_img">
                  <img src="images/logo_log.svg" alt="" />
                </a>
                <div className="login_pages_contents_hdngg">
                  <h5>Login</h5>
                  <p>Welcome back! please enter your details</p>
                </div>
                <form>
                  <div className="login_pages_contents_inr_form">
                    <div className="row login_pages_contents_inr_form_row">
                      <div className="col-lg-12 login_pages_contents_inr_form_col">
                        <div className="input_form_holderr">
                          <h6>Email Address</h6>
                          <input
                            type="email"
                            placeholder="company@example.com"
                            onChange={(e) => {
                              e.preventDefault();
                              setCreds({ ...creds, email: e.target.value });
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 login_pages_contents_inr_form_col">
                        <div
                          className="input_form_holderr password_hold"
                          data-toggle-password
                        >
                          <h6>Password</h6>
                          <input
                            type="password"
                            placeholder="*********"
                            id="myInput"
                            onChange={(e) => {
                              e.preventDefault();
                              setCreds({ ...creds, password: e.target.value });
                            }}
                          />
                          <a
                            href="Javascript:void(0);"
                            className="toggle_open_eye"
                          ></a>
                        </div>
                      </div>

                      <div className="col-lg-12 login_pages_contents_inr_form_col">
                        <div className="row remember_pass_row">
                          <div className="col-6 remember_pass_col_in">
                            <div className="custom_checked_remmbr">
                              <div className="form_input_check">
                                <label>
                                  <input type="checkbox" checked="" />
                                  <span>Remember session?</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="col-6 remember_pass_col_in">
                            <a
                              href="forgot_password.html"
                              className="cmn_anc_nn"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-12 login_pages_contents_inr_form_col">
                        <button
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            requests
                              .post(`${baseURL}/api-login`, creds)
                              .then((res) => {
                                console.log(res);
                                if (
                                  signIn({
                                    token: res.token,
                                    expiresIn: 60 * 24,
                                    tokenType: "Bearer",
                                  })
                                ) {
                                  console.log("loggedin");
                                } else {
                                  //Throw error
                                }
                              })
                              .catch((error) => {
                                console.log(error);
                              });
                          }}
                        >
                          Sign in
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
