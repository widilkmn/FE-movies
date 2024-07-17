import Authentication from "../features/auth/index.tsx";
import Detail from "../features/detail/detail.tsx";
import Home from "../features/home/index.tsx";
import Layout from "../components/layout.tsx";
import Movies from "../features/movie/index.tsx";
import ProtectedRoutes from "./protected-routes.tsx";
import TvShows from "../features/tv-show/index.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "detail/:type/:id",
            element: <Detail />,
          },
          {
            path: "movie",
            element: <Movies />,
          },
          {
            path: "tv-show",
            element: <TvShows />,
          },
          {
            path: "/login",
            element: <Authentication />,
          },
        ],
      },
    ],
  },
]);
