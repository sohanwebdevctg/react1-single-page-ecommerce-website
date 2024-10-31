import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <h1>some data show</h1>
      }
    ]
  },
]);


export default router;