import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from "../assets/placeholder.jpg";

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
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Official <Typography color="primaryLight.main" component="span" variant="span">Sponsors</Typography>
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "1rem", marginBottom: "1rem" }}>
                <Typography component="h2" variant="h2" textAlign="center">Official Platinum Partner</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="#0" target="_blank">
                        <Box
                            component="img"
                            sx={{
                                width: "20rem",
                                height: "100%",
                                borderRadius: "0.5rem"
                            }}
                            alt="Partner 1"
                            src={placeholder}
                        />
                    </Box>
                </Box>

                <Typography component="h2" variant="h2" textAlign="center">Official Gold Partners</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="#0" target="_blank">
                        <Box
                            component="img"
                            sx={{
                                width: "20rem",
                                height: "100%",
                                borderRadius: "0.5rem"
                            }}
                            alt="Partner 1"
                            src={placeholder}
                        />
                    </Box>
                    <Box component="a" href="#0" target="_blank">
                        <Box
                            component="img"
                            sx={{
                                width: "20rem",
                                height: "100%",
                                borderRadius: "0.5rem"
                            }}
                            alt="Partner 1"
                            src={placeholder}
                        />
                    </Box>
                </Box>

                <Typography component="h2" variant="h2" textAlign="center">Official Bronze Partners</Typography>
                <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <Box component="a" href="#0" target="_blank">
                        <Box
                            component="img"
                            sx={{
                                width: "20rem",
                                height: "100%",
                                borderRadius: "0.5rem"
                            }}
                            alt="Partner 1"
                            src={placeholder}
                        />
                    </Box>
                    <Box component="a" href="#0" target="_blank">
                        <Box
                            component="img"
                            sx={{
                                width: "20rem",
                                height: "100%",
                                borderRadius: "0.5rem"
                            }}
                            alt="Partner 1"
                            src={placeholder}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
