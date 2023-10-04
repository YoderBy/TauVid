// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem,Button, HStack, Show, Input } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ObjectGrid from './components/ObjectGrid';
import FacultiesList from './components/FacultiesList';
import { factory } from 'typescript';
import FacultySelector from './components/FacultySelector';
import SortSelector from './components/SortSelector';
import { Course, DisplayQuery, Faculty } from './utils/types';
import { type } from 'os';
import SidebarWithHeader from './components/SideBar';

function App() {
  let localSearchQuery = "";
  const [displayQuery, setDisplayQuery] = useState<DisplayQuery>({ faculty: null, searchQuery: "", id: '0111', type: 'faculty', sortBy: 'date' });
  //this object store the faculty selection and the refreshing state, later it will store some courses info and such
  const onClick = (course: Course) => {
    setDisplayQuery({ ...displayQuery, id: course.number, type: 'course', previous: { id: displayQuery.id, type: displayQuery.type } })
  };
  const onBack = () => {
    if (displayQuery.previous) {
      setDisplayQuery({ ...displayQuery, id: displayQuery.previous.id, type: displayQuery.previous.type })
    }
    // pass it down all the way to GameGrid
  };
  const SortSelect = (string:string) =>{
    console.log(string);
    setDisplayQuery({...displayQuery, sortBy:string});
  }
  const onSelect = (string: string) => {
    console.log("hello");
    setDisplayQuery({ ...displayQuery, id: string, type: 'faculty', previous: { id: displayQuery.id, type: displayQuery.type }, searchQuery: "" })
    
  };
  return (
    <>
      <Grid w = '100%' dir="rtl"
        templateAreas={{ // need to fix those templates Areas / switch the UI lib
          base: `"header header" "aside main"`
        }}
      >
        <GridItem w={'100%'} alignItems={'center'} area="header">
          <NavBar  onRefresh={onBack} />
          <HStack maxWidth= {{base:'90%', md: '500px'}} spacing={'5px'} marginBottom={'5px'}>
            <Button colorScheme="blue" onClick={onBack}>חזור</Button>
            <Input  onChange={(e) => {localSearchQuery = e.target.value}} placeholder='הזן שם מרצה/ שם קורס / מספר קורס'></Input>
            <Button colorScheme="blue" onClick={()=>setDisplayQuery({...displayQuery, searchQuery: localSearchQuery})}>מצא!</Button>  
          </HStack>
        </GridItem>
        <GridItem dir="rtl" area="aside">
            <SidebarWithHeader onSelectItem = {onSelect}/></GridItem>
        <GridItem area="main">
          <HStack>
            <SortSelector  onSelect=
              {SortSelect} DisplayQuery={displayQuery} />
            </HStack> 
            <ObjectGrid onClick={onClick} DisplayQuery={displayQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
