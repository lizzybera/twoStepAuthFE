import {createBrowserRouter} from "react-router-dom"
import Register from "../pages/auth/Register"
import Otp from "../pages/auth/Otp"
import SignIn from "../pages/auth/SignIn"
import Redirect from "../pages/auth/Redirect"
import HomeScren from "../pages/screen/HomeScren"
import Redirect2 from "../pages/auth/Redirect2"
import PrivateRouter from "./PrivateRouter"

export const mainRouter = createBrowserRouter([
    {
        path : "/",
        element : <PrivateRouter> <HomeScren /></PrivateRouter>

    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/:token/otp",
        element : <Otp />
    },
    {
        path : "/:token/sign-in",
        element : <SignIn />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    },
    {
        path : "/redirect",
        element : <Redirect />
    },
    {
        path : "/redirect2",
        element : <Redirect2 />
    },
])