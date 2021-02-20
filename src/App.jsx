import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

import { items } from "./data/items";
import { options } from "./data/options";

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      ) : null}
    </div>
  );
}

export default App;

// <Accordion items={items} />
// <Search />
