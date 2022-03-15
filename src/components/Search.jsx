import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  max-width: 600px;
  margin: auto;

  div {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    width: 100%;
    padding: 5px;
  }
  input {
    height: 100%;
    border: none;
    background: transparent;
    font-size: 1.2rem;
    color: white;
    padding: 1rem, 3rem;
    border: none;
    border-radius: 1rem;
    width: 100%;
    outline: none;
    margin-left: 5px;
  }
  svg {
    margin-left: 5px;
    /* padding: 2px; */
    color: white;
  }
`;

export default Search;
