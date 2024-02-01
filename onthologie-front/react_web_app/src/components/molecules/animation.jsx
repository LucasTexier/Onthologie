import React, { useEffect, useState } from "react";
import Gear from "../atoms/gears";
import Validation from "../atoms/Validation";
import "../../assets/scss/animation.css";
function Animation() {
  const [progressAmount, setProgressAmount] = useState(0);
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (progressAmount < 100) {
      const interval = setInterval(() => {
        setProgressAmount((prevProgress) => prevProgress + 10);
      }, 300);

      return () => clearInterval(interval);
    } else if (progressAmount >= 100 && !isLoadingComplete) {
      setLoadingComplete(true);
    }
  }, [progressAmount, isLoadingComplete]);

  const gearSize = 300; // Exemple: remplacez 300 par la taille réelle de vos engrenages

  return (
    <div>
      {isLoadingComplete ? (
        <div id="processing" className="complete center">
          <Validation />
        </div>
      ) : (
        <div className="loading-bar" style={{ width: gearSize }}>
          <span style={{ width: `${progressAmount}%` }}></span>
          <Gear />
        </div>
      )}
    </div>
  );
}

export default Animation;
