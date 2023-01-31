import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useAuthContext } from "../context/auth.context";
import { useUserlogin } from "../hooks/login.hooks";
import { userLogin } from "../services/auth.service";
import { authConsts } from "../utils/actions.constants";
import { Route, useHistory } from "react-router-dom";

const LoginPage = () => {
  const { state, dispatch } = useAuthContext();
  const { mutate } = useUserlogin();
  let usehistory_=useHistory()

  useEffect(() => {
    // userLogin('then').then(res => {
    // }).catch(err => {
    // })

    mutate(
      {},
      {
        onSuccess: async (res) => {
          console.log(res);
        },
        onError: async (err) => {
          console.log(err);
        },
      }
    );
    dispatch({ type: authConsts.LOGIN_SUCCESS, data: "helo" });
  }, []);

  const onSubmit=()=>{
    localStorage.setItem('token',JSON.stringify({auth:true}))
    usehistory_.push('/dashboard')
  }
  return (
    <div>
        
        
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h5 className="text-center">
              <i
                
                style={{ fontSize: "30px" }}
              >Login</i>
            </h5>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="button" className="btn btn-primary btn-block" onClick={()=>onSubmit()}>
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember 
                </div>
                <div>
                  <a href="#">Forgot your password</a>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    
      </div>
  )
};

export default LoginPage;
