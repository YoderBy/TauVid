// App.tsx

import React, { useState } from 'react';
import {useEffect} from 'react'

import { Grid, GridItem,Button, HStack, Show, Input, useDisclosure } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import ObjectGrid from './components/ObjectGrid';
import FacultiesList from './components/FacultiesList';
import { factory } from 'typescript';
import FacultySelector from './components/FacultySelector';
import SortSelector from './components/SortSelector';
import { Course, DisplayQuery, Faculty } from './utils/types';
import { type } from 'os';
import SidebarWithHeader, { MobileNav } from './components/SideBar';

function App() {
  //let localSearchQuery = "";
  const [displayQuery, setDisplayQuery] = useState<DisplayQuery>({ faculty: null, searchQuery: "", id: '0111', type: 'faculty', sortBy: 'date' });
  //this object store the faculty selection and the refreshing state, later it will store some courses info and such
  const onClick = (course: Course) => {
    
    setDisplayQuery
    ({ ...displayQuery, id: course.number, type: 'course',searchQuery:"", previous: { id: displayQuery.id, type: displayQuery.type }})
    window.scrollTo({
      top: -10,
      behavior: 'auto'
    });
  };

  const onBack = () => {
    if (displayQuery.previous) {
      setDisplayQuery({ ...displayQuery, id: displayQuery.previous.id, type: displayQuery.previous.type })
    }
    // pass it down all the way to GameGrid
  };
  const [localSearchQuery, setLocalSearchQuery] = useState<string>("");
  const SortSelect = (string:string) =>{
    setDisplayQuery({...displayQuery, sortBy:string});
  }
  const onSelect = (string: string) => {
    setDisplayQuery({ ...displayQuery, id: string, type: 'faculty', previous: { id: displayQuery.id, type: displayQuery.type }, searchQuery: "" })
    
  };
  const handleSearch = () => {
    setDisplayQuery({ ...displayQuery, searchQuery: localSearchQuery });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    if (event.code === 'Enter') { // 13 is the keyCode for the Enter key
      handleSearch();
    }

  };
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Preventing the default form submission
    handleSearch();
  };
  useEffect(() => {
    console.log(displayQuery);
  }, [displayQuery]);
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Grid 
      width={'fit-content'}
      dir="rtl"
        templateAreas={{ // need to fix those templates Areas / switch the UI lib
          base: `"header header" "main main"`,
          md: `"header header" "aside main"`
        }}
      >
        <GridItem alignItems={'center'} area="header">
          <NavBar  onRefresh={onBack} />
           <form onSubmit={handleFormSubmit}> 
        <HStack justifyContent={'space-between'} maxWidth={{base:'100%', md: '500px'}} marginBottom={'25px'}>
          <Button colorScheme="blue" onClick={onBack}>חזור</Button>
          <Input  
            onChange={(e) => setLocalSearchQuery(e.target.value)} 
            placeholder='הזן שם מרצה/ שם קורס / מספר קורס'
          />
          <Button colorScheme="blue" onClick={handleSearch} type="submit">מצא!</Button>
        </HStack>

        </form>
        </GridItem>
        <GridItem dir="rtl" area="aside">
          <SidebarWithHeader isOpen = {isOpen} onOpen= {onOpen} onClose={onClose} onSelectItem = {onSelect}/></GridItem>
        <GridItem area="main">
          <HStack>
          <MobileNav display = {{base: '', sm: "none"}}onOpen={onOpen} />
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
