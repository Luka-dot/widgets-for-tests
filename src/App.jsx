import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate';
import Search from "./components/Search";
import Route from './components/Route';
import Header from './components/Header';

import { items } from "./data/items";
import { options } from "./data/options";

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
    <Header />
      <Route path="/" >
        <Accordion items={items} />
      </Route>
      <Route path="/list" >
        <Search />
      </Route>
      <Route path="/dropdown" >
        <Dropdown  
          options={options} 
          selected={selected} 
          onSelectChange={setSelected} 
          label="Select a Color"
        />
      </Route>
      <Route path="/translate" >
        <Translate />
      </Route>
    </div>
  );
}

export default App;

// <Accordion items={items} />
// <Search />
