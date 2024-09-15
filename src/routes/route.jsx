import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/layouts/Layout";
import Lekhokh from "../pages/Lekhokh/lekhokh.jsx";
import Home from "../pages/Home/Home.jsx";


export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:<Lekhokh/>
      }
  ]
  },
]);
