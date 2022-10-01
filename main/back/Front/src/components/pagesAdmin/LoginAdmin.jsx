import React, {useState } from "react";
import "./login.css";
import auth from "../../services/loginAdmin";
import { toast, ToastContainer } from "react-toastify";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.loginAdmin(email, password);

      if (auth.getCurrentUser) {
        let user = auth.getCurrentUser();
        let name = user.name;
        toast.success(`مرحبا ${name}`);
        setTimeout(() => {
          window.location = "/dashboard";
        }, 1200);
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="login-container">
        <div className="login-cont">
          <p className="login-Title">Login</p>
          <form method="post" onSubmit={onSubmit}>
            <ul>
              <li>
                <div>
                  <input
                    className="login-input"
                    placeholder="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <div>
                  <input
                    className="login-input"
                    placeholder="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </li>
            </ul>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
