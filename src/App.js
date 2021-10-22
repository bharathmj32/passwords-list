import React from 'react'
import './App.css';
import PassList from './components/PassList';
import {Grid} from '@material-ui/core'

function App() {
  
  return (
    <Grid container justifyContent="center">
      <Grid item xs={11} md={8} >
        <PassList />
      </Grid>
     </Grid>
  );
}

export default App;
