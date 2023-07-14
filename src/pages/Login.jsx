import { useState } from "react";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import { login } from "../services/users/login";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userLogedin = await login(user);

    if (!userLogedin.ok) {
      return alert(userLogedin.message);
    }

    localStorage.setItem("token", userLogedin.token);

    alert(userLogedin.message);
    navigate("/");
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card bordered shadow-2xl w-80">
          <div className="card-body">
            <h2 className="card-title">Login</h2>
            <form onSubmit={handleSubmit}>
              <Input type="email" placeholder="email" label="Email" onChange={handleChange} />
              <Input type="password" placeholder="password" label="Password" onChange={handleChange} />
              <Button text="Login" />
              <Link to="/register" className="block w-full link-primary text-center my-4">Register</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
