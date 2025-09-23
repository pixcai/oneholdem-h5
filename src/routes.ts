import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import Tourney from "@/routes/tourney";
import Lobby from "@/routes/lobby";
import FriendsTable from "@/routes/friendstable";
import Me from "@/routes/me";

export const router = createBrowserRouter([
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
                path: "friendstable",
                Component: FriendsTable,
            },
            {
                path: "me",
                Component: Me,
            },
        ],
    },
]);
