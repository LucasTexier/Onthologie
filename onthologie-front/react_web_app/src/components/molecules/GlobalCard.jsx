import * as React from "react";
import HomeCard from "../atoms/HomeCard";
import Ratings from "../atoms/Ratings";
import MarkSelector from "../atoms/MarkSelector";

export default function GlobalCard() {
  const [mark, setMark] = React.useState("");

  const handleMarkChange = (value) => {
    setMark(value);
  };

  return (
    <>
      <HomeCard />
      <Ratings value={mark} />
      <MarkSelector value={mark} onChange={handleMarkChange} />
    </>
  );
}
