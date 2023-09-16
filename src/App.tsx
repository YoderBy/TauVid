import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Show, Grid, GridItem, Button, ButtonGroup } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'



function App() {
return (<>
    <NavBar></NavBar>
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg: `"nav nav" "aside main"`
      }
    }>
    
      <GridItem area='nav'>Nav</GridItem>
      <Show above='lg'><GridItem area='aside' bg = 'gold'>Aside</GridItem> </Show>
      <GridItem area='main' bg = 'dodgerblue'>Nav</GridItem>
    </Grid>
    </>
    )
}

export default App;
