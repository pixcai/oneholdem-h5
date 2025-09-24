import { ComponentPropsWithoutRef } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

export type TabPanelProps = ComponentPropsWithoutRef<"div"> & {
    value: string | number;
    index: string | number;
    contentSx?: SxProps<Theme>;
};

export default function TabPanel(props: TabPanelProps) {
    const { children, value, index, contentSx, ...restProps } = props;

    return (
        <div role="tabpanel" hidden={value !== index} {...restProps}>
            <Box
                sx={{
                    ...contentSx,
                    display: value === index ? "block" : "none",
                }}
            >
                {children}
            </Box>
        </div>
    );
}
