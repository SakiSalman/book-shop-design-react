import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home/Home.jsx";
import Writters from "../pages/Author/Writters.jsx";
import AuthorsAbout from "../pages/Author/about/AuthorsAbout.jsx";
import Error from "../components/Errors/Error.jsx";



export const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement : <Error/>,
    children:[
      {
          path:"/",
          element:<AuthorsAbout/>,
      },
      {
        path:"/authors",
        element:<Writters/>
      },
      {
        path:"/authors/:id",
        element:<AuthorsAbout/>
      }
  ]
  },
]);
