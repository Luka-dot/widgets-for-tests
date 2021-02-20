import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { translate } from "../data/translate";

const Translate = () => {
  const [language, setLanguage] = useState(translate[0]);
  const [text, settext] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => settext(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={translate}
        selected={language}
        onSelectChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
