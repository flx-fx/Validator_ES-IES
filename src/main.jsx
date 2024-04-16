import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ValidatorES from "./routes/ValidatorES.jsx";
import ValidatorIES from "./routes/ValidatorIES.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "elastischer-stoss",
                element: <ValidatorES/>,
            },
            {
                path: "inelastischer-stoss",
                element: <ValidatorIES/>,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
