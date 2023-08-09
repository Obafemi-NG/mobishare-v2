import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// imported pages
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Auth from "./pages/Auth/Auth";
import RootLayout from "./pages/RootLayout/RootLayout";
import InitiateTransaction from "./pages/InitiateTransaction/InitiateTransaction";
import Dashboard from "./pages/Dashboard/Dashboard";
import Product from "./pages/Product/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/dashboard",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "sendmoney",
          element: <InitiateTransaction />,
        },
        {
          path: "products",
          element: <Product />,
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
