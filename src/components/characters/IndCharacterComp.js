import React from "react";
import { FaBookDead } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function IndCharacterComp({ item }) {
  return (
    <>
      <button
        onClick={() => window.history.go(-1)}
        style={{
          padding: ".5rem .8rem",
          backgroundColor: "green",
          color: "white",
        }}
      >
        BACK
      </button>
      <div className="ind-container">
        <div className="img-con">
          <img src={item.img} alt=''></img>
        </div>
        <div className="info-con">
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
              <strong>Occupation: </strong> {item.occupation}
            </li>
            <li>
              <strong>Status: </strong>{" "}
              {item.status === "Alive" ? <AiFillHeart /> : <FaBookDead />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default IndCharacterComp;
