import { useState, useEffect, useRef, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import { TITLE, NAVBAR_HEIGHT } from "@/configs/app";
import i18n from "@/i18n";

import iconStar from "@/assets/star.png";

interface BaseProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const Base = ({ children, className, ...props }: BaseProps) => {
    return (
        <header
            className={clsx(
                "flex flex-nowrap items-center relative p-4 select-none bg-gray-100",
                className
            )}
            style={{ height: NAVBAR_HEIGHT }}
            {...props}
        >
            {children}
        </header>
    );
};

const languages = [
    { code: "zh-CN", text: "简体中文" },
    { code: "en", text: "English" },
];

// 主导航栏(一级导航栏)
export const Main = () => {
    const languagesPopover = useRef<HTMLDivElement>(null);
    const [languagesOpen, setLanguagesOpen] = useState(false);
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setLanguagesOpen(false);
    };

    useEffect(() => {
        const closeLanguagesPopover = (e: TouchEvent) => {
            if (
                languagesPopover.current &&
                languagesPopover.current.contains(e.target as Node)
            ) {
                return;
            }
            setLanguagesOpen(false);
        };
        document.addEventListener("touchstart", closeLanguagesPopover);
        return () => {
            document.removeEventListener("touchstart", closeLanguagesPopover);
        };
    }, []);

    return (
        <Base>
            <div className="flex-1">{TITLE}</div>
            <div>
                <img
                    src={iconStar}
                    width={24}
                    height={24}
                    alt=""
                    onClick={() => setLanguagesOpen(!languagesOpen)}
                />
            </div>
            <div
                ref={languagesPopover}
                className={clsx(
                    "absolute right-4 p-4 bg-[#f6f6f6] rounded-3xl",
                    languagesOpen ? "inline-flex flex-col gap-2" : "hidden"
                )}
                style={{ top: NAVBAR_HEIGHT }}
            >
                {languages.map((language) => (
                    <div
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className="p-4 w-32 bg-white rounded-xl text-center cursor-pointer"
                    >
                        {language.text}
                    </div>
                ))}
            </div>
        </Base>
    );
};
