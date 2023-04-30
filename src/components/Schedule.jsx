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
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import CoPresentIcon from '@mui/icons-material/CoPresent';

export default function Schedule() {
    const Content = ({ heading }) => {
        return (
            <div>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Delegate Registrations
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <ScheduleSendIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            May 04th - May 15th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Awarness Session
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                        <TimelineDot color="primary" variant="filled">
                            <CoPresentIcon fontSize="large" />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main', height: "2rem" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }}>
                        <Typography variant="h6" component="span">
                            May 16th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Delegate Reception Verification
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
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Competition Begins <br />
                        </Typography>
                        <Typography variant="h6" component="span">
                            6 Easy Questions <br />
                        </Typography>
                        <Typography variant="h6" component="span">
                            6 Medium Questions
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
                        <Typography variant={heading} component="span" fontWeight="bold">
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
                            12:15 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
                            Resuming the competition <br />
                        </Typography>
                        <Typography variant="h6" component="span">
                            3 Hard Questions
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
                            12:30 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
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
                            3:30 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
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
                            3:45 PM, May 17th
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                        <Typography variant={heading} component="span" fontWeight="bold">
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
                            4:00 PM, May 17th
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
            <Timeline position="alternate" sx={{ display: { xs: "block", md: "none" } }}>
                <Content heading="h6" />
            </Timeline>
        </Box>
    )
}
