import React from "react";
import NavBar from "./common/NavBar";
import Main from "./homescreen/Main";

export default function Homescreen() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section>
        <Main />
      </section>
      <footer>
        <div>Contact Us</div>
      </footer>
    </div>
  );
}
