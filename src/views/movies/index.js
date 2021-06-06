import { useState, useEffect } from 'react'
import Head from 'next/head'
import cx from 'classnames'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'

// Components
import MovieForm from '../../components/movies/MovieForm'
import MovieList from '../../components/movies/MovieList'
import MovieService from '../../lib/movies.service'
import Layout from '../../components/layout'

import styles from './Movies.module.css'

export default function Movies () {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        setSearching(true)
        const data = await MovieService.search(query)
        setTimeout(() => {
          setMovies(data)
          setSearching(false)
        }, 500)
      }
    }

    fetchData()
  }, [query])

  function onSubmit (event) {
    event.preventDefault()
    setQuery(event.target.elements.namedItem('query').value)
  }

  return (
    <Layout>
      <Head>
        <title>Hominem Movies</title>
      </Head>

      <Container className={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Movies
            </Typography>

            <MovieForm query={query} onSubmit={onSubmit} className={cx(styles.form)} />

            {searching ? <LinearProgress className={styles.progress} /> : null}

            {movies.length ? <MovieList movies={movies} /> : null}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
