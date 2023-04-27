import { Typography, Box } from "@mui/material";

export default function Awards() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="awards">
            <Typography component="h1" variant="h1">Awards</Typography>
        </Box>
    )
}
