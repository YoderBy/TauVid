// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';
import FacultiesList from './components/FacultiesList';
import { factory } from 'typescript';
import FacultySelector from './components/FacultySelector';
import SortSelector from './components/SortSelector';
import { Course, DisplayQuery, Faculty } from './utils/types';
import { type } from 'os';

function App() {
  const [displayQuery, setDisplayQuery] = useState<DisplayQuery>({faculty :null, refreshing: false, id: '0455', type: 'faculty'})
  //this object store the faculty selection and the refreshing state, later it will store some courses info and such
  const onClick = (course: Course)=>{
    setDisplayQuery({...displayQuery, id: course.number, type: 'course', previous : {id:displayQuery.id, type:displayQuery.type}}) 
  }
  const handleRefresh = () => {
    if(displayQuery.previous){
    setDisplayQuery({...displayQuery, id: displayQuery.previous.id, type: displayQuery.previous.type})}
    // pass it down all the way to GameGrid
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
          <HStack spacing = {'5px'} padding-left={'2px'} marginBottom={'5px'}>
            <SortSelector selected_Faculty={displayQuery.faculty} onSelect=
              {(faculty) => { setDisplayQuery({...displayQuery, faculty:faculty})}} />
            <FacultySelector selected_Faculty={displayQuery.faculty} onSelect=
              {(faculty) => { setDisplayQuery({...displayQuery, faculty:faculty})}} />
          </HStack> <GameGrid onClick = {onClick} DisplayQuery={displayQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
