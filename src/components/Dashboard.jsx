import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SendIcon from '@mui/icons-material/Send';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

export default function Dashboard() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawerWidth = "15rem"
    const drawer = (
        <Box sx={{ bgcolor: "primaryLight.main", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "1rem" }}>
            <Typography
                component="h1"
                variant="h1"
                sx={{ textAlign: "center", margin: "2rem 0 0 0", fontFamily: "Montserrat" }}
            >
                AQUATHON
            </Typography>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#home" onClick={() => setMobileOpen(false)}>
                            Home
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <CodeIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#about" onClick={() => setMobileOpen(false)}>
                            About
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#guidelines" onClick={() => setMobileOpen(false)}>
                            Guidelines
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <TimelineIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#schedule" onClick={() => setMobileOpen(false)}>
                            Schedule
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <EmojiEventsIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#awards" onClick={() => setMobileOpen(false)}>
                            Awards
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#partners" onClick={() => setMobileOpen(false)}>
                            Our Partners
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#register" onClick={() => setMobileOpen(false)}>
                            Register
                        </Link>
                    </ListItemButton>
                </ListItem>

                <Divider />
            </List>
            <List disablePadding>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <PermPhoneMsgIcon />
                        </ListItemIcon>

                        <Link color="inherit" underline="none" href="#contact" onClick={() => setMobileOpen(false)}>
                            Contact Us
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
            <Typography variant="p" component="p" textAlign="center">IEEE IIT ©️ 2023</Typography>
        </Box>
    )

    return (
        <Box
            component="nav"
            sx={{
                width: {
                    sm: drawerWidth
                }
            }}
        >
            {/* Menu Icon */}
            <IconButton
                color="secondary"
                onClick={handleDrawerToggle}
                sx={{
                    display: {
                        sm: 'none'
                    },
                    position: "fixed",
                    margin: "1rem"
                }}
            >
                <MenuIcon fontSize="large" />
            </IconButton>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                PaperProps={{ elevation: 0 }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                {drawer}
            </Drawer>

            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                PaperProps={{ elevation: 0 }}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}
