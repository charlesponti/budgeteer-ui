import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

import MovieCard from './MovieCard'
import MovieService from '../../lib/movies.service'

import cx from 'classnames'
import styles from './MovieListItem.module.scss'

export default function MovieListItem ({ movie }) {
  if (!movie) return null

  const [info, setInfo] = useState()
  const [loading, setLoading] = useState(false)

  /**
   * Handle click event on element
   * @param {SyntheticEvent} event
   */
  function onClick () {
    MovieService.searchById(movie.imdbID).then(response => {
      // Delay response to reduce page jitter
      setTimeout(() => {
        setInfo(response)
        setLoading(false)
      }, 500)
    })

    setLoading(true)
  }

  function onCloseButtonClick () {
    setInfo(null)
  }

  return (
    <li>
      <Grid container justify="space-between">
        <Grid item style={{ maxWidth: '85%' }}>
          <Typography variant="h5" className={cx(styles.movieTitle)}>{movie.Title}</Typography>
          <Typography
            variant="subtitle1"
            className={cx(styles.movieYear)}
          >
            {movie.Year}
          </Typography>
        </Grid>
        <Grid item>
          {info ? (
            <Button color="primary" onClick={onCloseButtonClick}>
              Close
            </Button>
          ) : (
            <Button color="primary" onClick={onClick}>
              Open
            </Button>
          )}
        </Grid>
      </Grid>
      {loading ? <LinearProgress /> : null}
      {info ? <MovieCard movie={info} /> : null}
    </li>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    Year: PropTypes.string,
    Title: PropTypes.string,
    Poster: PropTypes.string,
    Plot: PropTypes.string,
    imdbID: PropTypes.string,
    imdbRating: PropTypes.string,
    imdbVotes: PropTypes.string
  })
}
