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
            <Typography color="primaryLight.main" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Register
            </Typography>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScnNLC2rELv47Qd1CNkchX1yM77JoJa6FgQa7DI6-2D5hPioQ/viewform?embedded=true"
                frameBorder="0"
                style={styles.iframe}>Loading…</iframe>
        </Box>
    )
}

// CSS
const styles = {
    iframe: {
        overflowX: "hidden",
        width: "calc(100% - 5px)",
        height: "40rem"
    }
}