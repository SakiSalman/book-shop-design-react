import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home/Home.jsx";
import Writters from "../pages/about/Writters.jsx";
import AuthorsAbout from "../pages/about/AuthorsAbout.jsx";
import Error from "../components/Errors/Error.jsx";
import AddTocard from "../components/cardPageAdd/AddTocard.jsx";



export const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement : <Error/>,
    children:[
      {
          path:"/",
          element:<Home/>,
      },
      {
        path:"/authors",
        element:<Writters/>
      },
      {
        path:"/authors/:id",
        element:<AuthorsAbout/>
      },
      {
        path:"/addcard",
        element:<AddTocard/>
      }
  ]
  },
]);
