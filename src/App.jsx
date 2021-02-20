import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

import {items} from './data/items';
import {options} from './data/options';

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Dropdown
        options={options}
        selected={selected}
        onSelectChange={setSelected}
      />
    </div>
  );
}

export default App;

// <Accordion items={items} />
// <Search />
