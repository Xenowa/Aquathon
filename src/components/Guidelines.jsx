import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography';
import { Alert, List } from '@mui/material';
import NumbersIcon from '@mui/icons-material/Numbers';

export default function Guidelines() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="guidelines">
            <Typography color="primaryLight.main" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Guidelines
            </Typography>

            <List sx={{ margin: "0 3rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    The team leader can register the team through the online registration form.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    A team should be composed of a minimum of 2 and a maximum of 3 members.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    All team members must be Level 4 (1st year) full-time or part-time undergraduates at the Informatics Institute of Technology.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    Each participant in the competition can only be a member of one team.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    Only the team leader should fill out the registration form and the required details of the team members.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    No participant will be allowed to change teams once they register.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    A team should have a team name and a team leader assigned.
                </Alert>
                <Alert icon={<NumbersIcon fontSize="large" color="secondary" />} variant="filled" sx={{ bgcolor: "secondaryLight.main", width: "100%" }}>
                    You can use any programming language during the competition.
                </Alert>
            </List>

        </Box>
    )
}
