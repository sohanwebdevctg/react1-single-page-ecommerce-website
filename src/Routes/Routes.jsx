import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import CartTable from "../Pages/CartTable/CartTable";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/single-product/:id',
        element: <SingleProduct></SingleProduct>,
      },
      {
        path: '/cart-table',
        element : <CartTable></CartTable>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);


export default router;