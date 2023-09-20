// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';
import FacultiesList from './components/FacultiesList';
import { Faculty } from './Hooks/useFaculties';
import { factory } from 'typescript';

function App() {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    console.log('Refreshing triggered in App component.');
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    },100);
  };
  
  const [selfaculty, setSelFaculty] = useState<Faculty | null>(null)
  
  return (
    <>
      <Grid dir="rtl"
        templateAreas={{
          base: `"nav" "main"`,
          md: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr'
        }}
      >
        <GridItem area="nav">
          <NavBar onRefresh={handleRefresh} />
        </GridItem>
        <Show above='sm'>
        <GridItem 
        dir="rtl" paddingX = {'5px'} area="aside"><FacultiesList 
        onSelect={(faculty)=> {setSelFaculty(faculty)}}/></GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedFaculty = {selfaculty} refreshing={refreshing} />
        </GridItem>
        </Grid>
    </>
  );
}

export default App;
