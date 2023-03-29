import React from 'react';

import { Layout } from './components/Layout';
import { CalculatorLayout } from './components/CalculatorLayout/';
import './style/main.global.css';


function App() {
  return (
    <Layout>
      <CalculatorLayout />
    </Layout>
  );
}

export default App;