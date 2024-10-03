import "./App.css";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  CssBaseline,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Divider,
  Paper
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useStyles } from "./styles";
import Grid from "@mui/material/Grid2";

function App() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Typography variant="h3">Photo Album</Typography>
          <Container maxWidth="md">
            <Typography variant="body1" className={classes.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, et autem magnam perspiciatis minima non,
              cupiditate tempora voluptates, vitae maxime eveniet minus commodi numquam necessitatibus praesentium animi
              voluptas veniam? Impedit magni dicta recusandae, quisquam perferendis veniam modi ea tempora sapiente in!
              Doloribus corporis, debitis obcaecati vitae recusandae quaerat eaque officiis.
            </Typography>
          </Container>
        </div>

        <Divider orientation="horizontal" variant="middle" flexItem />

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image="https://picsum.photos/500" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Lorem, ipsum dolor.
                    </Typography>
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis debitis alias sit obcaecati
                      deleniti, quis enim temporibus doloremque vel nobis consequuntur praesentium eligendi, consectetur
                      consequatur totam nostrum maiores tempora error vero animi non placeat? Provident enim culpa
                      numquam blanditiis?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained">
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Paper variant="outlined" elevation={5}>
          <Typography variant="h6" align="center" gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi.
          </Typography>
          <Typography color="grey" variant="subheading-2">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio sapiente laudantium ad atque inventore ab
            consectetur officiis a! Tenetur libero laboriosam error et ratione alias ab vero assumenda quidem!
          </Typography>
        </Paper>
      </footer>
    </>
  );
}

export default App;
