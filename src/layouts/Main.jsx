/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/users/getUser";
import { logout } from "../services/users/logout";

const Main = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    getUser(token).then((user) => {
      if (!user.ok) {
        return navigate("/login");
      }
      setUser(user);
    });
  }, []);

  const handleLogout = async () => {
    const userLogedOut = await logout(token);

    if (!userLogedOut.ok) {
      return alert(userLogedOut.message);
    }

    localStorage.removeItem("token");
    alert(userLogedOut.message);
    navigate("/login");
  }

  return (
    <>
      <nav>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Book Apps</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Hello, {user.name}!</summary>
                  <ul className="p-2 bg-base-100">
                    <li>
                      <button type="button" onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mx-auto md:px-0 px-10">{children}</main>
    </>
  );
};

export default Main;
