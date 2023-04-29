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
            <Typography color="primaryLight.main" component="h1" variant="h1" fontWeight="bold" marginTop="1rem">
                Schedule
            </Typography>
        </Box>
    )
}
