import React from "react";

import SearchPage from "@pages/SearchPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import classes from "./app.module.scss";
import ShowPage from "./pages/ShowPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <ShowPage />,
  },
]);

function App() {
  return (
    <div className={classes.App}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
