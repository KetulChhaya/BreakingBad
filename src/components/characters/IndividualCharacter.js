import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../ui/Spinner";
import IndCharacterComp from "./IndCharacterComp";

function IndividualCharacter({match}) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${match.params.id}`
      );
      setItem(result.data);
      setLoading(false);
      // console.log(item[0])
    };
    fetchItem();
  });
  return (
    <div>
      {loading ? <Spinner /> : (
        <IndCharacterComp item={item[0]} />
      )}
    </div>
  );
}

export default IndividualCharacter;
