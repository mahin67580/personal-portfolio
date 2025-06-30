import {
    createBrowserRouter,

} from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Services from "../component/Services";
import AboutMe from "../component/AboutMe";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import Skills from "../component/Skills";
import SpecialSkills from "../component/SpecialSkills";
import Educationtwo from "../component/Educationtwo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/service-list',
                element: <Services />,
            },
            {
                path: '/about',
                element: <AboutMe/>,
            },
            {
                path: '/project-list',
                element: <Projects/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/tech-skill',
                element: <Skills/>,
            },
            {
                path: '/education',
                element: <Educationtwo/>,
            },
             
             
             
             
             
        ],
    },
]);