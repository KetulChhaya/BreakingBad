import React from "react";
import IndividualCharacter from "./IndividualCharacter";
import { Link } from "react-router-dom";

function CharacterItem({ item }) {
  const handleClick = ({ item }) => {
    return <IndividualCharacter item={item} />;
  };
  return (
    <Link to={`/character/${item.char_id}`}>
      <div className="card" onClick={handleClick}>
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt=""></img>
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name: </strong> {item.portrayed}
              </li>
              <li>
                <strong>Nick Name: </strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday: </strong> {item.birthday}
              </li>
              <li>
                <strong>Statue: </strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterItem;
