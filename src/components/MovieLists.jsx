import { Box, Typography } from "@mui/material";


const MovieLists = ({ title, loader }) => {
  
  return (
    <Box className='movies'>
      <Typography variant='h4'>List of Movies:</Typography>
      {title?.length > 0 ? (
        title?.map((t, i) => (
          <Typography key={i} variant='h6'>
            {t}
          </Typography>
        ))
      ) : (
        <Typography variant='h6'>{!loader? null:"Loading..."}</Typography>
      )}
    </Box>
  );
};

export default MovieLists;
