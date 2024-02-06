import * as React from "react";
import Liste from "../atoms/Liste";

export default function Filters({ onSelectProducer, onSelectLanguage }) {
    const reals = ['Chris_Columbus', 'Robert_Guédiguian', 'Quentin_Tarantino', 'Torquil_Jones', 'Chris_Marker', 'Martin_Scorsese', 'Christopher_Nolan'];
    const langues = ['Français', 'Anglais', 'Chinois'];

    const handleSelect = (selectedValue, type) => {
      if (type === 'Producteur') {
          onSelectProducer(selectedValue);
      } else if (type === 'Langue') {
          onSelectLanguage(selectedValue);
      }
  };

    return (
        <div style={{ backgroundColor: "darkgray", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginLeft: '10%', marginRight: '10%', paddingTop: '1.5%', paddingBottom: '1.5%' }}>
            <Liste
                values={reals}
                onSelect={value => handleSelect(value, 'Producteur')}
                type="Producteur"
            />
          <Liste
          values={langues}
          onSelect={value => handleSelect(value, 'Langue')}
          type = "Langue"
          />
          <Liste
          values={langues}
          type = "pegi"
          />
          <Liste
          values={langues}
          type = "language"
          />
          <Liste
          values={langues}
          type = "country"
          />
          <Liste
          values={langues}
          type = "director"
          />
      </div>
  );
}
