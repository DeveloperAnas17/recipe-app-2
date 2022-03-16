import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const SearchPage = () => {
  const [searchRecipes, setSearchRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=44bda745b1794914a31454b11a7cbc45&query=${name}`
    );
    const recipes = await data.json();
    setSearchRecipes(recipes.results);
  };
  return (
    <Grid>
      {searchRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    font-size: 0.8rem;
    line-height: 18px;
    /* text-align: center; */
  }
`;

export default SearchPage;
