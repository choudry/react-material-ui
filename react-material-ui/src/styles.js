import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  container: {
    //     padding: theme.spacing(8, 0, 6),
    //   backgroundColor: theme.pallete.background.paper
    padding: "20px",
  },
  icon: {
    marginRight: "20px",
  },
  description: {
    padding: "20px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  card: {
    height: "100%",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
    footer: {
        padding: "20px"
    }
}));
