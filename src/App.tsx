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
interface DisplayQuery {
  faculty: Faculty | null;
  refreshing : boolean;

}

function App() {
  const [displayQuery, setDisplayQuery] = useState<DisplayQuery>({faculty :null, refreshing: false})
  //this object store the faculty selection and the refreshing state, later it will store some courses info and such

  const handleRefresh = () => {
    setDisplayQuery({...displayQuery, refreshing:true})
    // pass it down all the way to GameGrid
    setTimeout(() => {
      setDisplayQuery({...displayQuery, refreshing:false})
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
            <FacultiesList selectedFaculty={displayQuery.faculty} onSelect={(faculty) => { 
              setDisplayQuery({...displayQuery, faculty:faculty})}} /></GridItem>
        </Show>
        <GridItem area="main">
          <FacultySelector selected_Faculty={displayQuery.faculty} onSelect={(faculty) => { setDisplayQuery({...displayQuery, faculty:faculty})}} />
          <GameGrid selectedFaculty={displayQuery.faculty} refreshing={displayQuery.refreshing} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
