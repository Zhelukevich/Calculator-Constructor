import React from 'react';

import { Calculator } from './Calculator';
import { Canvas } from './Canvas';

import styles from './constructor.css';

type Props = {};

export function Constructor({ }: Props) {
  return (
    <div className={styles.construct}>
      <Calculator />
      <Canvas />
    </div>
  );
}
