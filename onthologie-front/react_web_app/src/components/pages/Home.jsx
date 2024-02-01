import React from "react";
import TopBar from "../atoms/TopBar";
import Presentation from "../molecules/Presentation";

function Home() {
  return (
    <>
      <TopBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url('https://open-stand.org/wp-content/uploads/2016/04/International-Union-of-Cinemas-Calls-for-Open-Standards-in-the-Cinema-Industry.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Presentation style={{ fontSize: "2rem" }} />
      </div>
    </>
  );
}

export default Home;
