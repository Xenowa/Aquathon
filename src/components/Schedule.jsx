import { Typography, Box } from "@mui/material";

export default function Schedule() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="schedule" bgcolor="secondaryLight.main" color="primary.main">
            <Typography component="h1" variant="h1">Schedule</Typography>
        </Box>
    )
}
