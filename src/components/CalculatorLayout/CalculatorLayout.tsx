import React from 'react';

import classNames from 'classnames';

import styles from './calculatorLayout.css';


export function CalculatorLayout() {
  const numbers = classNames(
    styles.item,
    styles.numbers,
  );

  return (
    <div className={styles.calculator}>
      <div className={styles.box}>
        <output className={styles.output}>1234</output>
      </div>
      <div className={styles.box}>
        <ul className={styles.list_sign}>
          <li className={styles.item}>
            <button>/</button>
          </li>
          <li className={styles.item}>
            <button>x</button>
          </li>
          <li className={styles.item}>
            <button>-</button>
          </li>
          <li className={styles.item}>
            <button>+</button>
          </li>
        </ul>
      </div>
      <div className={styles.box}>
        <ul className={styles.list_numbers}>
          <li className={numbers}>
            <button>7</button>
          </li>
          <li className={numbers}>
            <button>8</button>
          </li>
          <li className={numbers}>
            <button>9</button>
          </li>
          <li className={numbers}>
            <button>4</button>
          </li>
          <li className={numbers}>
            <button>5</button>
          </li>
          <li className={numbers}>
            <button>6</button>
          </li>
          <li className={numbers}>
            <button>1</button>
          </li>
          <li className={numbers}>
            <button>2</button>
          </li>
          <li className={numbers}>
            <button>3</button>
          </li>
          <li className={numbers}>
            <button>0</button>
          </li>
          <li className={numbers}>
            <button>,</button>
          </li>
        </ul>
      </div>
      <div className={styles.box}>
        <button className={styles.equals}>=</button>
      </div>
    </div >
  );
}
