import { useState } from "react";
import Button from "../components/form/Button";
import Input from "../components/form/Input";

import { register } from "../services/users/register";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCreated = await register(user);

    if (userCreated.errors) {
      alert(userCreated.message);
    }

    if (userCreated.user) {
      alert(userCreated.message);
      navigate("/login");
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="card bordered shadow-2xl w-80">
          <div className="card-body">
            <h2 className="card-title">Register</h2>
            <form onSubmit={handleSubmit}>
              <Input type="text" placeholder="name" label="Name" onChange={handleChange} />
              <Input type="email" placeholder="email" label="Email" onChange={handleChange} />
              <Input type="password" placeholder="password" label="Password" onChange={handleChange} />
              <Input
                type="password"
                placeholder="repassword"
                label="Confirm Password"
                name={"password_confirmation"}
                onChange={handleChange}
              />

              <Button text="Register" />
              <Link to="/login" className="block w-full link-primary text-center my-4">Login</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
