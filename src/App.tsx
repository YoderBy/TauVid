// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';

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
      <NavBar onRefresh={handleRefresh} />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav"></GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="white" display={'none'}></GridItem>
        </Show>
        <GridItem area="main" bg="pearl">
          <GameGrid refreshing={refreshing} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
