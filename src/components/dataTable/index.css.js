import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  tableContainer: {
    backgroundColor: "#fff"
  },
  tableStyle: {
    "& thead": {
      "& tr": {
        "& th": {
          background: "#f5f5f5",
          fontWeight: "bold"
        },
      },
    },
  },
  pageLoader: {
    textAlign: "center !important"
  }
}));

export default useStyles;
