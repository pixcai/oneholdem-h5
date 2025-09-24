import { useState } from "react";
import Box from "@mui/material/Box";
import Tournament from "@/components/Tournament";

import assetNoLive from "@/assets/no-live.png";

export default function LiveTournaments() {
    const [tournaments, _setTournaments] = useState([]);

    return (
        <Box sx={{ p: 2, height: "100%" }}>
            {tournaments.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-full">
                    <img src={assetNoLive} alt="" />
                    <p className="mt-6 text-[#626469] text-sm">比赛筹备中</p>
                </div>
            ) : (
                tournaments.map(() => <Tournament />)
            )}
        </Box>
    );
}
