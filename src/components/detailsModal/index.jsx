import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, IconButton } from "@mui/material";
import useStyles from "./index.css";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const DetailsModal = (props) => {
  const classes = useStyles();
  const {
    modalOpen,
    handelClose,
    patientDetails
  } = props;

  return (
    <Dialog
      open={modalOpen}
      className={classes.dialogContainer}
    >
      <DialogTitle className={classes.dialogTitleContainer}>
        <Typography variant="h4">Patient Details</Typography>
        <IconButton aria-label="close" onClick={handelClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box
          className={classes.formContainerBox}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Name:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.name && patientDetails.name[0] && patientDetails.name[0].family + " " + patientDetails.name[0].given}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Resource Type:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.resourceType}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Id:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.id}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Gender:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.gender ? patientDetails.gender : "N/A"}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>BOB:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.birthDate ? patientDetails.birthDate : "N/A"}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Address:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.address && patientDetails.address[0] && patientDetails.address[0].text ? patientDetails.address[0].text + ", " + patientDetails.address[0].city : "N/A"}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row">
                <Typography variant="subtitle2" gutterBottom>
                  <b>Phone:</b>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                >
                  {patientDetails.telecom && patientDetails.telecom[0] && patientDetails.telecom[0].value ? patientDetails.telecom[0].value : "N/A"}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions dividers>
        <Button variant="outlined" onClick={handelClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog >
  );
};
export default DetailsModal;
