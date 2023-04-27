import { Typography, Box } from "@mui/material";

export default function About() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="about" bgcolor="secondaryLight.main" color="primary.main">
            <Typography component="h1" variant="h1">About</Typography>
        </Box>
    )
}
