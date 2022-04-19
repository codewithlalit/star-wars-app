import "./App.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStars } from "./redux/actions/starCast";

import { Container, Box, Grid, Paper } from "@mui/material";

import LastMovie from "./components/LastMovie";
import Characters from "./components/Characters";
import MovieLists from "./components/MovieLists";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  const starCast = useSelector((state) => state.starCast);

  const [title, setTitle] = useState([]);
  const [loader, setloader] = useState(false);
  const [lastMovieDetails, setLastMovieDetails] = useState({
    movie: "",
    date: "",
  });

  const getMoviesList = (id) => {
    setTitle([]);
    let moviesArr = starCast[id].films;
    console.log("movies", moviesArr);

    moviesArr.map(async (movie, i) => {
      let res = await fetch(movie);
      let data = await res.json();
      setTitle((prev) => [...prev, data.title]);
      if (i === moviesArr.length - 1) {
        setLastMovieDetails({
          movie: data.title,
          date: data.release_date,
        });
      }
      setloader(true);
    });
  };
  useEffect(() => {
    dispatch(getAllStars());
  }, []);

  return (
    <div className='App'>
      <Container>
        <Box className='container'>
          <Paper elevation={20}>
            <Grid container>
              <Grid item xs={12}>
                <Header />
              </Grid>

              <Grid item md={12} sm={12} xs={12}>
                <Characters starCast={starCast} getMoviesList={getMoviesList} />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <MovieLists title={title} loader={loader} />
              </Grid>
              <Grid item xs={12}>
                <LastMovie
                  lastMovieDetails={lastMovieDetails}
                  loader={loader}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default App;
