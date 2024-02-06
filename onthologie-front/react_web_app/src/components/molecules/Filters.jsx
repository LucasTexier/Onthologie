import * as React from "react";
import Liste from "../atoms/Liste";

export default function Filters() {
    const options1 = [10, 20, 30];
    const options2 = ['A', 'B', 'C'];
    const handleSelect = (selectedValue) => {
      console.log('Selected value:', selectedValue);
    };
    

  return (
    <div style={{ backgroundColor:"darkgray", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginLeft: '10%', marginRight: '10%', paddingTop: '1.5%', paddingBottom: '1.5%'}}>
        <Liste
        values={options1}
        onSelect={handleSelect}
        type = "duration"
        />
        <Liste
        values={options2}
        onSelect={handleSelect}
        type = "genre"
        />
        <Liste
        values={options2}
        onSelect={handleSelect}
        type = "pegi"
        />
        <Liste
        values={options2}
        onSelect={handleSelect}
        type = "language"
        />
        <Liste
        values={options2}
        onSelect={handleSelect}
        type = "country"
        />
        <Liste
        values={options2}
        onSelect={handleSelect}
        type = "director"
        />
    </div>
  );
}
