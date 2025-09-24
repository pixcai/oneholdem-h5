import { createBrowserRouter } from "react-router";
import Login from "@/routes/login";
import RootLayout from "@/layouts/RootLayout";
import Tourney from "@/routes/tourney";
import Lobby from "@/routes/lobby";
import Tables from "@/routes/tables";
import Me from "@/routes/me";

export const router = createBrowserRouter([
    {
        path: "/login",
        Component: Login,
    },
    {
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Tourney,
            },
            {
                path: "lobby",
                Component: Lobby,
            },
            {
                path: "tables",
                Component: Tables,
            },
            {
                path: "me",
                Component: Me,
            },
        ],
    },
]);
