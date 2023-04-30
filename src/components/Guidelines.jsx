import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { useState } from 'react';
import { ExpandCircleDownRounded } from '@mui/icons-material';
import { Button, Divider } from '@mui/material';

export default function Guidelines() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


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

            <Box sx={{ maxWidth: "90rem", margin: "0 2rem" }}>
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">How can a team leader register their team for Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            The team leader can register the team through the online registration form.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">What is the minimum and maximum number of members allowed in a team for Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            A team should be composed of a minimum of 2 and a maximum of 3 members.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">What is the academic level requirement for participating in Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            All team members must be Level 4 (1st year) full-time or part-time undergraduates at the Informatics Institute of Technology.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel4'}
                    onChange={handleChange('panel4')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">Can a participant be a member of more than one team during the competition?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Each participant in the competition can only be a member of one team.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel5'}
                    onChange={handleChange('panel5')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">Who is responsible for filling out the registration form and providing the details of the team members for Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Only the team leader should fill out the registration form and the required details of the team members.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel6'}
                    onChange={handleChange('panel6')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">Is it possible for participants to switch teams after registering for Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            No participant will be allowed to change teams once they register.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel7'}
                    onChange={handleChange('panel7')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">What are the basic requirements for creating a team for Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            A team should have a team name and a team leader assigned.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel8'}
                    onChange={handleChange('panel8')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">Is there a restriction on the programming language to be used during Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            You can use any programming language during the competition.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel9'}
                    onChange={handleChange('panel9')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">What are the consequences of misbehavior or misconduct during the competition?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Any misbehave or misconduct during the competition will be disqualified the team.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                    disableGutters
                    expanded={expanded === 'panel10'}
                    onChange={handleChange('panel10')}
                    sx={{ bgcolor: "secondaryLight.main", color: "primary.main" }}
                >
                    <AccordionSummary expandIcon={<ExpandCircleDownRounded fontSize="large" color="secondary" />}>
                        <Typography variant="h4">Whose decision is considered final in case of any disputes during Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            The decision of the organizing committee will be final.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Button
                color="secondary"
                variant="outlined"
                component="a"
                sx={{ margin: "1rem 0" }}
                href="#0">Download Booklet</Button>
        </Box>
    )
}
