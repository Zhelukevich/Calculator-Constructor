import React from 'react';

import { Constructor } from './components/Constructor';
import { Layout } from './components/Layout';
import { Switch } from './components/Switch';

import './style/main.global.css';


function App() {
  return (
    <Layout>
      <Switch />
      <Constructor />
    </Layout>
  );
}

export default App;