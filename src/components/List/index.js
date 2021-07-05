import React from 'react';
import t from 'prop-types';
import styles from './List.module.scss';

List.propTypes = {
  children: t.arrayOf(t.node),
};

export default function List({ children }) {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  );
}
