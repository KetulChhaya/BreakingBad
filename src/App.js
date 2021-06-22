import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndividualCharacter from "./components/characters/IndividualCharacter";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <>
      <Router>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <Switch>
          <Route exact path="/BreakingBad/" render={() => <CharacterGrid isLoading={isLoading} items={items} />} />
          <Route path="/character/:id" component={IndividualCharacter}/>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
