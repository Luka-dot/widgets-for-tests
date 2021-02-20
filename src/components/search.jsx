import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const search = async () => {
        await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: searchText
            }
        })
    };
    
    search();
  }, [searchText]);

  return (
    <div>
      <div className="ui form">
        <div className="find">
          <label>Search Term</label>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
