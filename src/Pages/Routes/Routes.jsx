import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import About from "../About/About";
import BookDetails from "../BookDetails/BookDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[
        {
            index: true,
            loader: () => fetch("/Data.json"),
            path: "/",
            Component: Home
        },
        {
          path:"/About",
          Component: About
        },
        {
          path: "/bookDetails/:id",
          Component: BookDetails
        }
    ]
  },
]);