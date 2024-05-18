import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSearch(inputValue);
    setInputValue(""); // Clear the input field after submission
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster /> {/* This will render the toast notifications */}
    </header>
  );
};

export default SearchBar;
