import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function PageLinks() {
  return (
    <section className="my-5">
      <Button variant="outlined">
        <Link to="transactions">
          Transactions
        </Link>
      </Button>

      <Button variant="outlined">
        <Link to="movies">
          Movies
        </Link>
      </Button>
    </section>
  );
}
