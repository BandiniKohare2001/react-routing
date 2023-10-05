import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
   <RouterProvider router={router} />
  </>
);
