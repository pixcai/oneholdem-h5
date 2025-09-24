import { Outlet, useNavigation } from "react-router";
import { Main as NavBar } from "@/components/NavBar";
import BottomBar from "@/components/BottomBar";

export default function RootLayout() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <>
            <NavBar />
            <div className="flex flex-col flex-1 overflow-y-scroll">
                {isNavigating && <div>Loading</div>}
                <Outlet />
            </div>
            <BottomBar />
        </>
    );
}
