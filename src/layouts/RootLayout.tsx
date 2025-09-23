import { Outlet, useNavigation } from "react-router";
import { NavBar } from "@/components/NavBar";
import { TabBar } from "@/components/TabBar";

export default function RootLayout() {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <>
            <div className="sticky w-screen top-0 z-[1000]">
                <NavBar />
            </div>
            <div className="flex flex-col">
                {isNavigating && <div>Loading</div>}
                <Outlet />
            </div>
            <div className="fixed w-screen bottom-0 z-[1000]">
                <TabBar />
            </div>
        </>
    );
}
