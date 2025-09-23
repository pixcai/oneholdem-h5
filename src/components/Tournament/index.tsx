import { Link } from "react-router";

import assetTournament from "@/assets/tournament.png";

export const Tournament = () => {
    return (
        <div>
            <div className="flex items-center">
                <div className="flex-1">
                    <div>
                        <h3>大师赛</h3>
                    </div>
                    <p className="text-[#9FA2A8] text-xs">
                        享受最纯粹的比赛形式
                    </p>
                </div>
                <div>
                    <Link to="/" className="text-[#9FA2A8] text-lg">
                        更多
                    </Link>
                </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
                <img src={assetTournament} alt="" />
            </div>
        </div>
    );
};
