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
import AuthProvider from "./firebase/AuthProvider";
import PrivateRoute from "./Routes/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <RecipePage></RecipePage>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://chef-recipe-hunting-server-side-shahadat10033.vercel.app/data/${params.id}`
          );
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
