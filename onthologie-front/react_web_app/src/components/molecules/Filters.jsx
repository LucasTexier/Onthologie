import * as React from "react";
import Liste from "../atoms/Liste";

export default function Filters({ onSelectProducer, onSelectLanguage, onSelectDuree }) {
    const reals = ['Chris_Columbus', 'Robert_Guédiguian', 'Quentin_Tarantino', 'Torquil_Jones', 'Chris_Marker', 'Martin_Scorsese', 'Christopher_Nolan'];
    const langues = ['Français', 'Anglais', 'Chinois'];
    const pegis = ['Tout public', '18+'];
    const duree = ['court métrage', 'long métrage']

    const handleSelect = (selectedValue, type) => {
      if (type === 'Producteur') {
          onSelectProducer(selectedValue);
      } else if (type === 'Langue') {
          onSelectLanguage(selectedValue);
      } else if (type === 'Durée') {
        onSelectDuree(selectedValue);
    }
  };

    return (
        <div style={{ backgroundColor: "darkgray", display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginLeft: '30%', marginRight: '30%', paddingTop: '1.5%', paddingBottom: '1.5%' }}>
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
          values={pegis}
          type = "Pegi"
          />
          <Liste
          values={duree}
          type = "Durée"
          onSelect={value => handleSelect(value, 'Durée')}
          />
      </div>
  );
}
