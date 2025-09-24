import { useState } from "react";
import Box from "@mui/material/Box";
import Tournament from "@/components/Tournament";

import assetNoFollowing from "@/assets/no-following.png";

export default function FollowingTournaments() {
    const [tournaments, _setTournaments] = useState([]);

    return (
        <Box sx={{ p: 2, height: "100%" }}>
            {tournaments.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-full">
                    <img src={assetNoFollowing} alt="" />
                    <p className="mt-6 text-[#626469] text-sm">关注更多比赛</p>
                </div>
            ) : (
                tournaments.map(() => <Tournament />)
            )}
        </Box>
    );
}
