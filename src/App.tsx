// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';
import FacultiesList from './components/FacultiesList';
import { Faculty } from './Hooks/useFaculties';
import { factory } from 'typescript';
import FacultySelector from './components/FacultySelector';

function App() {
  const [refreshing, setRefreshing] = useState(false);// store the refreshing state
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null); // stores faculty selection


  const handleRefresh = () => {
    setRefreshing(true); // pass it down all the way to GameGrid
    setTimeout(() => {
      setRefreshing(false);
    }, 100);
  };


  return (
    <>
      <Grid dir="rtl"
        templateAreas={{ // need to fix those templates Areas / switch the UI lib
          base: `"nav nav" "aside main"`,
          sm: `"nav nav" "aside main "`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onRefresh={handleRefresh} />
        </GridItem>
        <Show above='sm'>
          <GridItem
            dir="rtl" w={'3%'} paddingX={'5px'} area="aside">
            <FacultiesList selectedFaculty={selectedFaculty} onSelect={(faculty) => { setSelectedFaculty(faculty) }} /></GridItem>
        </Show>
        <GridItem area="main">
          <FacultySelector selected_Faculty={selectedFaculty} onSelect={(faculty) => { setSelectedFaculty(faculty) }} />
          <GameGrid selectedFaculty={selectedFaculty} refreshing={refreshing} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
