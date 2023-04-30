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
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
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
                Aquathon is a mini-hackathon that is newly presented by the IEEE Student
                Branch of the Informatics Institute of Technology with the aim of
                introducing undergraduate freshers to the world of hackathons.

                This mini-hackathon is exclusively for all Level 04 students at the
                Informatics Institute of Technology who are new to the technology field
                and eager to experience challenges. The insufficient idea about hackathons
                and less hackathon experience among fresh undergraduates are the major
                reasons for this new initiative. <br /><br />

                This is a six-hour mini-hackathon consisting of fifteen programming
                questions in order to deliver a vast idea about the structure of
                hackathons, where those questions are categorized into the following
                level of difficulty. <br /><br />
                Easy questions - <Typography component="span" variant="span" color="primaryLight.main">6 Questions</Typography>, 10 minutes each  <br />
                Medium questions - <Typography component="span" variant="span" color="primaryLight.main">6 Questions</Typography>, 20 minutes each  <br />
                Hard questions - <Typography component="span" variant="span" color="primaryLight.main">3 Questions</Typography>, 1 hour each

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
                                Register Yourself
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
                            <Button size="large" variant="contained" color="secondary" component="a" href="https://docs.google.com/spreadsheets/d/1Tz50_ugiI-fgNCcBo7wqnICcdRyNfLwP3Cg-5UR3Kbc/edit?usp=sharing" target='_blank'>
                                View Database
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
