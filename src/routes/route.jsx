import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {
          path:"/",
          element:<Home/>
      }
  ]
  },
]);
