import { Box, Button, Typography } from "@mui/material";
import AquathonLightIcon from "../assets/Auquadrop-light.png"
import ReactParticles from "./ReactParticles";
import ocean from "../assets/Ocean.jpeg"

export default function Home() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${ocean})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: {
                xs: "bottom",
                sm: "50% 90%"
            }
        }} id="home">
            <ReactParticles />

            <img
                src={AquathonLightIcon} alt="Logo"
                style={{ width: "100%", maxWidth: "40rem", maxHeight: "20rem", objectFit: "cover" }}
            />
            <Typography
                component="h3"
                variant="h3"
                textAlign="center"
                sx={{
                    fontStyle: "italic",
                    marginBottom: "3rem"
                }}
            >
                "Dive deep to discover the possibilities"
            </Typography>
            <Button
                component="a"
                sx={{ fontSize: "20px" }}
                variant="outlined"
                color="secondary"
                href="#register">
                Register Now
            </Button>
        </Box>
    )
}
