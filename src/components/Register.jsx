import { Typography, Box } from "@mui/material";

export default function Register() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="register">
            <Typography component="h1" variant="h1">Register</Typography>
        </Box>
    )
}
