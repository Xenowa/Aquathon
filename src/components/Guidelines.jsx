import { Typography, Box } from "@mui/material";

export default function Guidelines() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="guidelines">
            <Typography component="h1" variant="h1">Guidelines</Typography>
        </Box>
    )
}
