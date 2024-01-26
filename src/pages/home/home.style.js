import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  mainContentWrapper: {
    background: "#fff",
    overflowY: "scroll",
  },
  patientListContainer: {
    marginLeft: "77px",
    backgroundColor: "#f5f5f5",
    minHeight: "90vh",
  },
  containerBody: {
    paddingTop: "50px",
    textAlign: "left"
  },
  ageSlider:{
    maxWidth: "400px",
  }
}));

export default useStyles;
