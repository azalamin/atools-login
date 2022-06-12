import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import IMG from "../assets/login.png";
import "./style.css";

const Login = () => {
  const [check, setCheck] = useState(true);
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((detail) => {
        if (detail?.token) {
          toast.success(`${detail?.token}`);
        }
        if (detail?.error) {
          toast.error(`${detail?.error}`);
        }
        event.target.reset();
      });
  };
  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-md-5 login-form container text-center">
        <h2 className="fw-bold mb-0">Welcome Back</h2>
        <p className="text-muted">Sign in to your account</p>
        <form onSubmit={handleLogin} className="w-75 mx-auto">
          <input
            className="mb-3 form-control input-custom"
            type="email"
            placeholder="Email Address *"
            name="email"
          />
          <input
            className="mb-3 form-control input-custom"
            type="password"
            placeholder="Password *"
            name="password"
          />
          <button
            type="submit"
            className="btn trial-btn text-white input-custom"
          >
            Login
          </button>
          <div className="d-flex justify-content-between mt-3 remember">
            <Form.Check
              onChange={() => setCheck(!check)}
              type="checkbox"
              id="remember"
              checked={check}
              label="Remember"
            />
            <p className="forget-password">Forget Password?</p>
          </div>
        </form>
      </div>
      <div className="col-md-7 d-none d-md-block login-img">
        <img className="img-fluid" src={IMG} alt="" />
      </div>
    </div>
  );
};

export default Login;
