import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root.jsx';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ValidatorES from "./routes/ValidatorES.jsx";
import ValidatorIES from "./routes/ValidatorIES.jsx";
import Index from "./routes/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
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

export function validate(sum1, sum2, range) {
    return Math.abs(sum1 - sum2) <= Math.abs(sum1 * range);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
);
