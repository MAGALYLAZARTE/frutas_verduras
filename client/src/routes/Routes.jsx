import Layout from "../layout/Layout";
import Home from "../pages/home";
import Signup from "../pages/SingUp";
import Months from "../pages/months";
import ForMonths from "../pages/ForMonths";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "months",
        element: <Months />,
      },
      {
        path: "month/:month",
        element: <ForMonths />,
      },

    ],
  },
]);
