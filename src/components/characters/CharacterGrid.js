import React from "react";
import "../../img/spinner.mov.gif";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";

function CharacterGrid({ isLoading, items }) {
  return isLoading ? (
    <Spinner />
  ) : (
    // <Router>
    <section className="cards">
      {items.map((item) => (
        // <Link to={"/character/" + item.char_id +"/" + item.name}>
        <CharacterItem id={item.char_id} item={item}></CharacterItem>
        // </Link>
      ))}
    </section>
  );
  // </Router>
}

export default CharacterGrid;
