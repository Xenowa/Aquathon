import Box from "@mui/material/Box"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightIcon from '@mui/icons-material/Light';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

export default function Schedule() {
    const Content = ({ heading }) => {
        return (
            <div>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Registrations and check in
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <HowToRegIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            8:30 AM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Competition Begins
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <CodeIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            9:15 AM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Break
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <AccessTimeFilledIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            1:30 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Resuming the competition
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <HourglassTopIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            1:30 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Competition Ends
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <CodeOffIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            5:00 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Award Ceremony
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <EmojiEventsIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            5:30 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span">
                            Concluding the event
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <LightIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            6:00 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </div>
        )
    }

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="schedule" bgcolor="secondaryLight.main" color="primary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Structure and <Typography color="primaryLight.main" component="span" variant="span">Schedule</Typography>
            </Typography>

            {/* For Desktops */}
            <Timeline position="alternate" sx={{ display: { xs: "none", md: "block" } }}>
                <Content heading="h3" />
            </Timeline>
            {/* For mobile */}
            <Timeline position="left" sx={{ display: { xs: "block", md: "none" } }}>
                <Content heading="h6" />
            </Timeline>
        </Box>
    )
}
