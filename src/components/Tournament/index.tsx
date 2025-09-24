import { Link } from "react-router";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

import assetTournament from "@/assets/tournament.png";
import IconTitle from "@/assets/icons/title.svg?react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";

export default function Tournament() {
    return (
        <div>
            <div className="flex items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-1 pt-4">
                        <SvgIcon component={IconTitle} />
                        <Typography variant="h6" fontSize="1rem">
                            大师赛
                        </Typography>
                    </div>
                    <p className="mt-2 pb-4 text-[#9FA2A8] text-xs">
                        享受最纯粹的比赛形式
                    </p>
                </div>
                <div>
                    <Link
                        to="/"
                        className="flex items-center gap-1 text-[#9FA2A8] text-sm"
                    >
                        <span>更多</span>
                        <SvgIcon component={IconArrowRight} />
                    </Link>
                </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
                <img src={assetTournament} alt="" />
            </div>
        </div>
    );
}
