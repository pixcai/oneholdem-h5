import { TITLE } from "@/configs/app";

export const NavBar = () => {
    return (
        <div className="flex flex-nowrap items-center h-[64px] select-none bg-gray-100">
            <h1>{TITLE}</h1>
        </div>
    );
};
