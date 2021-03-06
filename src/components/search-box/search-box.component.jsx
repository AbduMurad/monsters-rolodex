import react from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
