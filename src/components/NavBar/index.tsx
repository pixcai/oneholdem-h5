import { useId, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { TITLE } from "@/configs/app";
import i18n from "@/i18n";

import assetLogo from "@/assets/logo.png";
import IconLanguage from "@/assets/icons/language.svg?react";
import IconNotification from "@/assets/icons/notification.svg?react";

const languages = [
    { code: "zh-CN", text: "简体中文" },
    { code: "en", text: "English" },
];

export interface MainProps {
    showNotification?: boolean;
}

// 主导航栏(一级导航栏)
export const Main = ({ showNotification = true }: MainProps) => {
    const [languagesAnchorEl, setLanguagesAnchorEl] =
        useState<HTMLElement | null>(null);
    const languagesMenuId = useId();
    const onLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setLanguagesAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="menu">
                    <img src={assetLogo} alt="" />
                </IconButton>
                <Typography
                    component="div"
                    variant="h6"
                    flexGrow={1}
                    fontWeight="bold"
                    color="textPrimary"
                >
                    {TITLE}
                </Typography>
                <Box>
                    <IconButton
                        aria-label="select language"
                        aria-controls={languagesMenuId}
                        aria-haspopup="true"
                        onClick={(e) => setLanguagesAnchorEl(e.currentTarget)}
                    >
                        <SvgIcon component={IconLanguage} />
                    </IconButton>
                    {showNotification && (
                        <IconButton aria-label="notification">
                            <Badge
                                badgeContent={1}
                                color="error"
                                variant="dot"
                                invisible={false}
                            >
                                <SvgIcon component={IconNotification} />
                            </Badge>
                        </IconButton>
                    )}
                </Box>
            </Toolbar>
            <Menu
                anchorEl={languagesAnchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                id={languagesMenuId}
                open={!!languagesAnchorEl}
                onClose={() => setLanguagesAnchorEl(null)}
            >
                {languages.map(({ code, text }) => (
                    <MenuItem key={code} onClick={() => onLanguageChange(code)}>
                        {text}
                    </MenuItem>
                ))}
            </Menu>
        </AppBar>
    );
};
