import { useState } from "react";
import Box from "@mui/material/Box";
import Tournament from "@/components/Tournament";

export default function AllTournaments() {
    const [tournaments, _setTournaments] = useState([1, 2, 3]);

    return (
        <Box sx={{ p: 2, height: "100%" }}>
            {tournaments.map(() => (
                <Tournament />
            ))}
        </Box>
    );
}
