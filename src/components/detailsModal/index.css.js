import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  dialogContainer: {
    "& .MuiDialog-paper": {
      maxWidth: "500px",
      height: "350px",
      width: "90%",
    },
  },
  dialogContainerApproval: {
    "& .MuiDialog-paper": {
      maxWidth: "500px",
      height: "350px",
      width: "90%",
    },
  },
  dialogTitleContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  formContainerBox: {
    "& .MuiTextField-root": {
      marginTop: "15px",
    },
  },
}));

export default useStyles;
