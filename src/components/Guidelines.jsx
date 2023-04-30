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
        console.log(newExpanded)
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
            <Typography color="primaryLight.main" component="h1" variant="h1" fontWeight="bold" marginTop="1rem">
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
                        <Typography variant="h4">Can I participate as an individual, or do I need to form a team?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            You need to participate as a team. Teams of 2-3 members are allowed.
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
                        <Typography variant="h4">How many questions will there be, and what will the difficulty level be?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            There will be a total of 15 questions, with six easy questions, six medium questions, and three hard questions
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
                        <Typography variant="h4">How long does the competition last?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            The competition will take place on May 26th, from 9.00am to 4.00pm.
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
                        <Typography variant="h4">Will snacks and drinks be provided during the competition?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            Yes, participants will be provided with 1-2 pieces of snack and a drink during the event.
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
                        <Typography variant="h4">What is the eligibility criteria for participating in Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            All participants must have a valid student ID and be able to provide proof of enrollment upon request.
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
                        <Typography variant="h4">What is the academic qualification required to participate in Aquathon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="p">
                            All the participants must be level 4 undergraduates studying at IIT.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Button color="secondary" variant="outlined" component="a" href="#0">Download Booklet</Button>
        </Box>
    )
}
