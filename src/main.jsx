import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Routes/Root";
import Home from "./Routes/Home";
import Blog from "./Routes/Blog";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import ErrorPg from "./Components/ErrorPg";
import RecipePage from "./Routes/RecipePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPg />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/:id",
        element: <RecipePage></RecipePage>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/data/${params.id}`);
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
