import { Box, Button, Typography } from "@mui/material";
import AquathonLightIcon from "../assets/Auquadrop-light.png"

export default function Home() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="home">
            <img
                src={AquathonLightIcon} alt="Logo"
                style={{ width: "30rem", height: "22rem", objectFit: "cover" }}
            />
            <Typography
                component="h1"
                variant="h1"
            >
                Coding is the new norm
            </Typography>
            <Button
                component="a"
                variant="outlined"
                color="secondary"
                href="#register">
                Register Now
            </Button>
        </Box>
    )
}
