import React from "react"
import TopBar from "../atoms/TopBar";
import Filters from "../molecules/Filters";
import Divider from '@mui/material/Divider';
import Search from "../atoms/search";

function FiltrePage() {
  const options1 = [10, 20, 30];
  const options2 = ['A', 'B', 'C'];
  const handleSelect = (selectedValue) => {
    console.log('Selected value:', selectedValue);
  };
  
  return (
    <>
      <TopBar />
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '40px', marginTop: '5%' }}> Trouve ton film par filtrage !</h1>
      <Divider style={{ marginLeft: '40%', backgroundColor: 'white', width: '20%' }} />
      <Filters />
      <Search />
    </>
  );
}

export default FiltrePage;
