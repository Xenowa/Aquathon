import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Code, Groups, Person } from '@mui/icons-material';

export default function About() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="about" bgcolor="white" color="primary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem">
                What is <Typography color="primaryLight.main" component="span" variant="span">Aquathon?</Typography>
            </Typography>

            <Typography
                component="p"
                variant="p"
                sx={{
                    bgcolor: "secondaryLight.main",
                    padding: "2rem",
                    margin: "0 2rem",
                    maxWidth: "81rem",
                    borderRadius: "0.5rem",
                    textAlign: "justify"
                }}
            >
                Aquathon is an exciting mini hackathon event for level 4
                students of Informatics Institute of Technology. This
                competition will challenge participants to solve a series
                of algorithmic problems of varying difficulty levels
                conducted on the HackerRank platform. Aquathon is a great
                opportunity for students to showcase their problem-solving
                skills and network with other like-minded individuals.
                Don't miss your chance to participate in this exciting event!
            </Typography>

            <Grid container spacing={2} sx={{ maxWidth: "90rem", padding: "0 2rem" }} marginBottom="1rem">
                <Grid item xs={12} md={4}>
                    <Card sx={{
                        bgcolor: "secondaryLight.main",
                        color: "primary.main",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "center",
                        height: "100%"
                    }}>
                        <CardContent>
                            <Person color="secondary" fontSize="large" />
                            <Typography component="h2" variant="h2">
                                Create Your Team
                            </Typography>
                            <Typography component="p" variant="p">
                                Fill out the <Typography component="span" variant="span" color="primaryLight.main">Google Form</Typography> with relevant details to register your team
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained" color="secondary" component="a" href="#register">
                                Register your team
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{
                        bgcolor: "secondaryLight.main",
                        color: "primary.main",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "center",
                        height: "100%"
                    }}>
                        <CardContent>
                            <Groups color="secondary" fontSize="large" />
                            <Typography component="h2" variant="h2">
                                View Your Team
                            </Typography>
                            <Typography component="p" variant="p">
                                After registering through the form, your team will be allocated in a <Typography component="span" variant="span" color="primaryLight.main">database</Typography> where you can view further details
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained" color="secondary" component="a" href="#0" target='_blank'>
                                Visit Database
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{
                        bgcolor: "secondaryLight.main",
                        color: "primary.main",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "center",
                        height: "100%"
                    }}>
                        <CardContent>
                            <Code color="secondary" fontSize="large" />
                            <Typography component="h2" variant="h2">
                                Hacker Rank
                            </Typography>
                            <Typography component="p" variant="p">
                                HackerRank is the platform where the participants will be receiving the coding tasks and submitting answers. <Typography component="span" variant="span" color="primaryLight.main">Sharpen your coding skills</Typography> by solving coding challenges.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="contained" color="secondary" component="a" href="https://www.hackerrank.com/dashboard" target='_blank'>
                                Visit Hacker Rank
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}
