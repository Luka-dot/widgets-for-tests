import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchText, setSearchText] = useState("programing");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchText,
        },
      });

      setResult(data.query.search);
    };

    if (searchText && !result.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (searchText) {
          search();
        }
      }, 800);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [searchText]);

  const renderResults = result.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
