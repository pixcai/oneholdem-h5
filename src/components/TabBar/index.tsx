import { useMemo } from "react";
import { useLocation, Link } from "react-router";
import clsx from "clsx";
import { TabBarTabs } from "@/configs/app";

import iconStar from "@/assets/star.png";

interface TabProps {
    text: string;
    href: string;
    icon: string;
    selected?: boolean;
}

const Tab = ({ text, href, icon, selected = false }: TabProps) => {
    const className = clsx(
        "flex flex-col justify-center items-center flex-1 select-none",
        {
            "bg-blue-300": selected,
        }
    );
    return (
        <Link to={href} className={className}>
            <img src={icon} width={24} height={24} />
            <div>{text}</div>
        </Link>
    );
};

const tabs = [
    {
        key: TabBarTabs.Tourney,
        text: "Tourney",
        href: "/",
        icon: iconStar,
    },
    {
        key: TabBarTabs.Lobby,
        text: "Lobby",
        href: "/lobby",
        icon: iconStar,
    },
    {
        key: TabBarTabs.FriendsTable,
        text: "FriendsTable",
        href: "/friendstable",
        icon: iconStar,
    },
    {
        key: TabBarTabs.Me,
        text: "Me",
        href: "/me",
        icon: iconStar,
    },
];

export function TabBar() {
    const { pathname } = useLocation();
    const current = useMemo(() => {
        for (const tab of tabs) {
            if (tab.href !== "/" && pathname.startsWith(tab.href)) {
                return tab.key;
            }
        }
        return tabs[0].key;
    }, [pathname]);

    return (
        <div className="h-[56px] overflow-y-hidden bg-gray-200">
            <div className="flex flex-nowrap justify-around align-center h-full">
                {tabs.map(({ key, ...props }) => (
                    <Tab key={key} {...props} selected={key === current} />
                ))}
            </div>
        </div>
    );
}
