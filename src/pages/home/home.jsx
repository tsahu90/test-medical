import React from "react";
import useStyles from "./home.style";
import useHome from "./home.hook";
import LeftMenu from "../../components/leftMenu/index"
import Header from "../../components/header/index"
import Grid from "@mui/material/Grid";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import DataTable from "../../components/dataTable/index"
import DetailsModal from "../../components/detailsModal/index"


const HomePage = () => {
    const classes = useStyles();
    const {
        handleChange,
        ageRangeValue,
        patientList,
        filteredPatientList,
        modalOpen,
        handelModalOpen,
        handelClose,
        patientDetails
    } = useHome();

    return (
        <div>
            <main className={classes.mainContentWrapper}>
                <LeftMenu />
                <Header />
                <Box className={classes.patientListContainer} >
                    <Container className={classes.containerBody}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                                <Typography variant="h4" gutterBottom>
                                    Patient List
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6" gutterBottom>
                                        Filter by age
                                    </Typography>
                                    <Slider
                                        className={classes.ageSlider}
                                        getAriaLabel={() => 'Age range'}
                                        value={ageRangeValue}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <DataTable
                                    patientList={patientList}
                                    filteredPatientList={filteredPatientList}
                                    handelModalOpen={handelModalOpen}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <DetailsModal
                    modalOpen={modalOpen}
                    handelClose={handelClose}
                    patientDetails={patientDetails}
                />
            </main>
        </div >
    );
};

export default HomePage;
