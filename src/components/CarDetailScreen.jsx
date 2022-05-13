import React from "react";
import CarDetailMain from "./cardetailscreen/CarDetailMain";
import NavBar from "./common/NavBar";

export default function CarDetailScreen(props) {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <CarDetailMain/>
      </section>
    </div>
  );
}
