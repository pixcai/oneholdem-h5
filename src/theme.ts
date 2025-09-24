import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        text: {
            primary: "#1D1E20",
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F6F6F6",
                    boxShadow: "none",
                },
            },
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    backgroundColor: "#F6F6F6",
                    justifyContent: "space-between",
                },
            },
        },
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    color: "#D2D6DD",
                    "&.Mui-selected": {
                        color: "#1D1E20",
                    },
                },
            },
        },
    },
});
