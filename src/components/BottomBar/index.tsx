import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SvgIcon from "@mui/material/SvgIcon";

import IconTourney from "@/assets/icons/tourney.svg?react";
import IconLobby from "@/assets/icons/lobby.svg?react";
import IconTables from "@/assets/icons/tables.svg?react";
import IconMe from "@/assets/icons/me.svg?react";

export enum BottomBarAction {
    Tourney,
    Lobby,
    Tables,
    Me,
}

const actions = [
    {
        key: BottomBarAction.Tourney,
        label: "bottombar.tourney",
        link: "/",
        icon: IconTourney,
    },
    {
        key: BottomBarAction.Lobby,
        label: "bottombar.lobby",
        link: "/lobby",
        icon: IconLobby,
    },
    {
        key: BottomBarAction.Tables,
        label: "bottombar.tables",
        link: "/tables",
        icon: IconTables,
    },
    {
        key: BottomBarAction.Me,
        label: "bottombar.me",
        link: "/me",
        icon: IconMe,
    },
];

export default function BottomBar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const current = useMemo(() => {
        for (const action of actions) {
            if (action.link !== "/" && pathname.startsWith(action.link)) {
                return action.link;
            }
        }
        return actions[0].link;
    }, [pathname]);

    return (
        <BottomNavigation
            showLabels
            value={current}
            onChange={(_e, link) => navigate(link)}
        >
            {actions.map(({ key, label, link, icon }) => (
                <BottomNavigationAction
                    key={key}
                    value={link}
                    label={t(label)}
                    icon={<SvgIcon component={icon} />}
                />
            ))}
        </BottomNavigation>
    );
}
