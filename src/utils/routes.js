import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import About from "../components/About.jsx";
import Cart from "../components/Cart";
import Shop from "../components/Shop";
import ErrorPage from "../components/ErrorPage";
import { productsAndCartData } from "../loaders/getCart&ProductData";

// created router using react-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
