import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home";
import Edit, { loader as bookLoader } from "./pages/Edit";
import Add from "./pages/Add";
import MyProfile from "./pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "edit/:id",
    element: <Edit />,
    loader: bookLoader
  },
  {
    path: "add",
    element: <Add />
  },
  {
    path: "my-profile",
    element: <MyProfile />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
