import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Home from '../components/Home';
import Header from '../components/Header';

export default function Index() {
  return (
  <div>
  <Header />
      <Home />
  </div>
  );
}
