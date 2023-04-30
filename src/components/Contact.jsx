import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import placeholder from "../assets/placeholder.jpg";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Person } from "@mui/icons-material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Contact() {
    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
        }} id="contact" bgcolor="secondaryLight.main" color="primary.main">
            <Typography color="primary" component="h1" variant="h1" fontWeight="bold" marginTop="1rem" textAlign="center">
                Contact <Typography color="primaryLight.main" component="span" variant="span">Us</Typography>
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center"
                }}>
                    <CardMedia
                        sx={{ height: 140, border: "1px solid white", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={placeholder}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="secondary" variant="h5" component="h5" fontWeight="bold">
                            Chairperson <br />
                            IEEE Student Branch of IIT

                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        Malith Amarawickrama
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        malith.20210353@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main", borderBottom: "none" }}>
                                        +94 76 620 1619
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center"
                }}>
                    <CardMedia
                        sx={{ height: 140, border: "1px solid white", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={placeholder}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="secondary" variant="h5" component="h5" fontWeight="bold">
                            Chairperson <br />
                            Aquathon

                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        Budwin De Saram
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        dinura.20210387@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main", borderBottom: "none" }}>
                                        +94 71 796 7534
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card sx={{
                    width: "20rem",
                    height: "100%",
                    bgcolor: "secondaryLight.main",
                    color: "primary.main",
                    textAlign: "center"
                }}>
                    <CardMedia
                        sx={{ height: 140, border: "1px solid white", borderRadius: "0.5rem 0.5rem 0 0" }}
                        image={placeholder}
                        title="First Place"
                    />
                    <CardContent>
                        <Typography gutterBottom color="secondary" variant="h5" component="h5" fontWeight="bold">
                            Treasurer <br />
                            IEEE Student Branch of IIT
                        </Typography>

                        <Table>
                            <TableBody >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Person fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        Azahim Adheeb
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <EmailIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main" }}>
                                        azahim.20210443@iit.ac.lk
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row" sx={{ borderBottom: "none" }}>
                                        <LocalPhoneIcon fontSize="large" color="secondary" />
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: "primary.main", borderBottom: "none" }}>
                                        +94 77 442 2078
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
