import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

const Category = () => {
  return (
    <List>
      <SLinks to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLinks>
      <SLinks to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLinks>
      <SLinks to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thaifood</h4>
      </SLinks>
      <SLinks to={"/cuisine/Indian"}>
        <GiChopsticks />
        <h4>Indian</h4>
      </SLinks>
    </List>
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  justify-content: space-between;
  margin: auto;
`;

const SLinks = styled(NavLink)`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  padding: 2px;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.7rem;
  }
  svg {
    z-index: 10;
    color: #f33636;
    font-size: 1.9rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
