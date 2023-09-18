// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';
import FacultiesList from './components/FacultiesList';

function App() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    console.log('Refreshing triggered in App component.');
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    },100);
  };

  return (
    <>
      <Grid 
        templateAreas={{
          base: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          md: '200px 1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar onRefresh={handleRefresh} />
        </GridItem>
        <Show above = "md">
        <GridItem 
        dir="rtl" paddingX = {'5px'} area="aside"><FacultiesList/></GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid refreshing={refreshing} />
        </GridItem>
        </Grid>
    </>
  );
}

export default App;
