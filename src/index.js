import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.scss';
import Web from "./pages/web/Web";
import Library from "./pages/library/Library";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

ReactDOM.render(<App />, document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <Web />,
    },
    {
        path: "/library",
        element: <Library />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);