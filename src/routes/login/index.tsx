import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import { Main as NavBar } from "@/components/NavBar";

import assetLogin from "@/assets/bg-login.png";
import IconGoogle from "@/assets/icons/google.svg?react";
import IconApple from "@/assets/icons/apple.svg?react";
import IconWallet from "@/assets/icons/wallet.svg?react";

const LoginButton = styled(Button)({
    "&.MuiButton-root": {
        padding: "0.75rem",
        backgroundColor: "white",
        fontSize: "0.875rem",
        textTransform: "none",
        color: "black",
        borderRadius: "1rem",
    },
});

const enum LoginType {
    Google,
    Apple,
    Wallet,
}

export default function Login() {
    const { t } = useTranslation();
    const onLogin = (_type: LoginType) => {};

    return (
        <>
            <NavBar showNotification={false} />
            <div
                className="flex flex-1 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${assetLogin})` }}
            />
            <div className="fixed p-4 bottom-8 w-full">
                <div className="p-4 bg-[#F6F6F6] rounded-2xl">
                    <Typography variant="h6">{t("login.title")}</Typography>
                    <Stack spacing={2} marginTop={2}>
                        <LoginButton
                            startIcon={<IconGoogle />}
                            onClick={() => onLogin(LoginType.Google)}
                        >
                            {t("login.with_google")}
                        </LoginButton>
                        <LoginButton
                            startIcon={<IconApple />}
                            onClick={() => onLogin(LoginType.Apple)}
                        >
                            {t("login.with_apple")}
                        </LoginButton>
                        <LoginButton
                            startIcon={<IconWallet />}
                            onClick={() => onLogin(LoginType.Wallet)}
                        >
                            {t("login.with_wallet")}
                        </LoginButton>
                    </Stack>
                </div>
            </div>
        </>
    );
}
