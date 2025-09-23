import { useMemo } from "react";
import { useLocation, Link } from "react-router";
import { useTranslation } from "react-i18next";
import { TABBAR_HEIGHT } from "@/configs/app";

import iconStar from "@/assets/star.png";

interface TabProps {
    text: string;
    href: string;
    icon: string;
    selected?: boolean;
}

const Tab = ({ text, href, icon, selected = false }: TabProps) => {
    return (
        <Link
            to={href}
            className="flex flex-col justify-center items-center flex-1 select-none"
        >
            <img src={icon} width={24} height={24} alt="" />
            <div className={selected ? "text-black" : "text-gray-600"}>
                {text}
            </div>
        </Link>
    );
};

const tabs = [
    {
        text: "tabbar.tourney",
        href: "/",
        icon: iconStar,
    },
    {
        text: "tabbar.lobby",
        href: "/lobby",
        icon: iconStar,
    },
    {
        text: "tabbar.friendstable",
        href: "/friendstable",
        icon: iconStar,
    },
    {
        text: "tabbar.me",
        href: "/me",
        icon: iconStar,
    },
];

export function TabBar() {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    const current = useMemo(() => {
        for (const tab of tabs) {
            if (tab.href !== "/" && pathname.startsWith(tab.href)) {
                return tab;
            }
        }
        return tabs[0];
    }, [pathname]);

    return (
        <div
            className="overflow-y-hidden bg-gray-200"
            style={{ height: TABBAR_HEIGHT }}
        >
            <div className="flex flex-nowrap justify-around align-center h-full">
                {tabs.map(({ text, href, icon }) => (
                    <Tab
                        key={href}
                        text={t(text)}
                        href={href}
                        icon={icon}
                        selected={href === current.href}
                    />
                ))}
            </div>
        </div>
    );
}
