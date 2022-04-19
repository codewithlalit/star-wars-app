import { Box, Typography } from "@mui/material";

const LastMovie = ({ lastMovieDetails, loader }) => {
  return (
    <>
      <Box className='lastMovie'>
        <Typography variant='h4'>Name/Year last movie:</Typography>
        {lastMovieDetails.movie !== "" ? (
          <>
            <Typography variant='h6'>{lastMovieDetails?.movie}</Typography>
            <Typography variant='h6'>{lastMovieDetails?.date}</Typography>
          </>
        ) : (
          <Typography variant='h6'>{!loader ? null : "Loading..."}</Typography>
        )}
      </Box>
    </>
  );
};

export default LastMovie;
