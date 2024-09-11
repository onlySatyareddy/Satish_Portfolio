import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

import "./Static/Css/App.css";
import "./Static/Css/main..css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Index from "./Components/Index";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

function App() {
  const [router, setRouter] = useState(null);

  useEffect(() => {
    const newRouter = createBrowserRouter([
      {
        path: "/",
        element: <Index />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/portfolio",
            element: <Portfolio />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
    ]);

    setRouter(newRouter);
  }, []);

  useEffect(() => {
    document.title = "Satis's Poltfolio"; // Set your desired title here
  }, []);

  return (
    <div id="root" style={{ minHeight: "100vh" }}>
      {router && (
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      )}
    </div>
  );
}

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      className="d-flex align-items-center rounded p-4 flex-wrap justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <img
        src={require("./assets/imgages/404.jpg")}
        alt="404"
        className="rounded"
        style={{ maxWidth: "100%" }}
      />
      <h2 className="text-bold text-danger text-center ms-md-3">
        Page Not Found.
      </h2>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("resize", () => {
  document.getElementById("root").style.minHeight = window.innerHeight + "px";
});

export default App;
