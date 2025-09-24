import { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@/components/TabPanel";

import AllTournaments from "./components/AllTournaments";
import FollowingTournaments from "./components/FollowingTournaments";
import LiveTournaments from "./components/LiveTournaments";

const enum TournamentTabs {
    All,
    Following,
    Live,
}

export default function Tourney() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(TournamentTabs.All);

    return (
        <>
            <Tabs
                variant="fullWidth"
                value={activeTab}
                onChange={(_e, tab) => setActiveTab(tab)}
            >
                <Tab
                    id="tourney-tab-all"
                    label={t("tourney.tab.all")}
                    aria-controls="tourney-tabpanel-all"
                />
                <Tab
                    id="tourney-tab-following"
                    label={t("tourney.tab.following")}
                    aria-controls="tourney-tabpanel-following"
                />
                <Tab
                    id="tourney-tab-live"
                    label={t("tourney.tab.live")}
                    aria-controls="tourney-tabpanel-live"
                />
            </Tabs>
            <TabPanel
                id="tourney-tabpanel-all"
                className="h-full overflow-scroll"
                index={TournamentTabs.All}
                value={activeTab}
                contentSx={{ height: "100%" }}
                aria-labelledby="tourney-tab-all"
            >
                <AllTournaments />
            </TabPanel>
            <TabPanel
                id="tourney-tabpanel-following"
                className="h-full overflow-scroll"
                index={TournamentTabs.Following}
                value={activeTab}
                contentSx={{ height: "100%" }}
                aria-labelledby="tourney-tab-following"
            >
                <FollowingTournaments />
            </TabPanel>
            <TabPanel
                id="tourney-tabpanel-live"
                className="h-full overflow-scroll"
                index={TournamentTabs.Live}
                value={activeTab}
                contentSx={{ height: "100%" }}
                aria-labelledby="tourney-tab-live"
            >
                <LiveTournaments />
            </TabPanel>
        </>
    );
}
