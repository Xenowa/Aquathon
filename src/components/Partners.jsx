import { Typography, Box } from "@mui/material";

export default function Partners() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="partners" bgcolor="secondaryLight.main" color="primary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem">
                Official <Typography color="primaryLight.main" component="span" variant="span">Sponsors</Typography>
            </Typography>
        </Box>
    )
}
