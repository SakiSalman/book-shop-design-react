import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/layouts/Layout";
import Lekhokh from "../pages/Author/lekhokh.jsx";
import Home from "../pages/Home/Home.jsx";
import AuthorrsBooks from "../pages/Authors book/authenitic.jsx";



export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:<AuthorrsBooks/>
      }
  ]
  },
]);
