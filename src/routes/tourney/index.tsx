import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Tournament } from "@/components/Tournament";

import assetNoFollowing from "@/assets/no-following.png";
import assetNoLive from "@/assets/no-live.png";

const enum TabType {
    All,
    Following,
    Live,
}

const TournamentList = ({ items = [] }) => {
    return items.map(() => <Tournament />);
};

export default function Tourney() {
    const { t } = useTranslation();
    const [tab, setTab] = useState(TabType.All);
    const [items, _setItems] = useState([]);

    const onTabChange = (_e: React.SyntheticEvent, tab: TabType) => {
        setTab(tab);
    };

    return (
        <>
            <Tabs value={tab} onChange={onTabChange} centered>
                <Tab label={t("tourney.tab.all")} />
                <Tab label={t("tourney.tab.following")} />
                <Tab label={t("tourney.tab.live")} />
            </Tabs>
            <div className="flex flex-col flex-1 justify-center items-center p-4">
                <div role="tabpanel" hidden={tab !== TabType.All}>
                    <TournamentList items={items} />
                </div>
                <div role="tabpanel" hidden={tab !== TabType.Following}>
                    {items.length === 0 ? (
                        <div className="text-center">
                            <img src={assetNoFollowing} alt="" />
                            <p className="mt-4">关注更多比赛</p>
                        </div>
                    ) : (
                        <TournamentList items={items} />
                    )}
                </div>
                <div role="tabpanel" hidden={tab !== TabType.Live}>
                    {items.length === 0 ? (
                        <div className="text-center">
                            <img src={assetNoLive} alt="" />
                            <p className="mt-4">比赛筹备中</p>
                        </div>
                    ) : (
                        <TournamentList items={items} />
                    )}
                </div>
            </div>
        </>
    );
}
