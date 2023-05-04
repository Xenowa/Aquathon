import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import firstplace from "../assets/first place.jpg"
import secondplace from "../assets/second place.jpg"
import thirdplace from "../assets/third place.jpg"

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
            <Typography color="primaryLight.main" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Awards
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "baseline", flexWrap: "wrap", gap: "1rem" }}>
                <Card sx={{
                    width: "15rem",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "1",
                        md: "2"
                    }
                }}>
                    <CardMedia
                        sx={{
                            height: {
                                md: "23rem",
                                xs: "20rem"
                            },
                            borderRadius: "0.5rem 0.5rem 0 0"
                        }}
                        image={firstplace}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="secondary" variant="h2" component="h2">
                            1st Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 10,000
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "15rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "2",
                        md: "3"
                    }
                }}>
                    <CardMedia
                        sx={{ height: "20rem", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={secondplace}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            2nd Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 7,500
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{
                    width: "15rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center",
                    borderRadius: "0.5rem",
                    order: {
                        sm: "3",
                        md: "1"
                    }
                }}>
                    <CardMedia
                        sx={{ height: "20rem", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={thirdplace}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="h2">
                            3rd Place
                        </Typography>
                        <Typography component="h3" variant="h3">
                            Rs. 5,000
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ maxWidth: "40rem", display: "flex", alignItems: "center", flexDirection: "column", gap: "1rem", margin: "1rem 3rem" }}>
                <Alert severity="info" variant="outlined" sx={{ width: "100%" }}>Three lucky participants will receive free IEEE global memberships</Alert>
                <Alert severity="info" variant="outlined" sx={{ width: "100%" }}>All participants are awarded an e-certificate</Alert>
            </Box>
        </Box>
    )
}
