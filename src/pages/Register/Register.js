import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "../../components/Auth/UserPool";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    // Make an API call to your backend to register
    e.preventDefault();

    // Make an API call to your backend to register
    UserPool.signUp(
      email,
      password,
      [{ Name: "name", Value: name }],
      null,
      (error, data) => {
        if (error) {
          console.log("Registration successful: ", data);
          // navigate to login page
          navigate("/");
        } else {
          console.log("Registration failed: ", error.message);
        }
      }
    );
    // } catch (error) {
  };

  return (
    <section className="vh-100 bg-primary">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card border-0 rounded-3">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid rounded-3"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">FileHub</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Register your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={handleRegister}
                        >
                          Register
                        </button>
                      </div>

                      <a href="#!" className="small text-white">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-white">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
