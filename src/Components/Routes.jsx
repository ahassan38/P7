import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Card from "../Pages/Card"
import ErrorPage from "../Pages/ErrorPage"

// défini les routes, c'ette fonction est appelé dans index.js
function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<ErrorPage /> },
        { path: "/about", element: <About />, errorElement:<ErrorPage /> },
        { path: "/logement", element: <Card />, errorElement:<ErrorPage /> },
        { path: "*", element: <ErrorPage /> }  // toutes les routes non trouvées iront vers errorPage
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
        
}

export default Routes