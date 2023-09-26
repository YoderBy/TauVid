// App.tsx

import React, { useState } from 'react';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import RefreshButton from './components/RefreshButton';
import FacultiesList from './components/FacultiesList';
import { Faculty } from './Hooks/useFaculties';
import { factory } from 'typescript';

function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [selfaculty, setSelFaculty] = useState<Faculty | null>(null)
  const [sidebarOpen, setSideBarOpen] = useState(false);
  
  const handleRefresh = () => {
    console.log('Refreshing triggered in App component.');
    setRefreshing(true);
    setTimeout(()=>{
      setRefreshing(false);
    },100);
  };
  

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <>
      <Grid dir="rtl"
        templateAreas={{
          base: `"nav nav" "aside main"`,
          sm: `"nav nav" "aside main "`,
          md: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onRefresh={handleRefresh} />
        </GridItem>
        <Show>
       
        <GridItem 
        dir="rtl" paddingX = {'5px'} area="aside">
        <FacultiesList isOpen = {sidebarOpen} onSelect={(faculty)=> {setSelFaculty(faculty)}}/></GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedFaculty = {selfaculty} refreshing={refreshing} />
        </GridItem>
        </Grid>
    </>
  );
}

export default App;
