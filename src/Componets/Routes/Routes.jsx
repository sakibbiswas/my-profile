import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import About from "../About/About";
import Expertise from "../Expertise/Expertise";
import Testimonial from "../Testimonial/Testimonial";
import Conatct from "../Conatct/Conatct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/expertise',
                element: <Expertise></Expertise>
            },
            {
                path: '/test',
                element: <Testimonial></Testimonial>
            },
            {
                path: '/contact',
                element: <Conatct></Conatct>
            },
        ]
    }
])