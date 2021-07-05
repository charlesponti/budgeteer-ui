import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MovieListItem from './MovieListItem';

const MovieListContainer = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function MovieList({ movies }) {
  return movies && movies.length ? (
    <Grid container justify="center" component={MovieListContainer}>
      {movies.map((movie) => (
        <Grid item xs={11} key={movie.imdbID}>
          <MovieListItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  ) : null;
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
