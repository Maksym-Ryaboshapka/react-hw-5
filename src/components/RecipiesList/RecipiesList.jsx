import Recipe from "../Recipe/Recipe.jsx";

import recipiesData from "./recipies.json";
import { Container, List, Item } from "./RecepiesList.styled.js";

const RecipiesList = () => {
  return (
    <Container>
      <List>
        {recipiesData.map((recipe) => {
          return (
            <Item key={recipe.id}>
              <Recipe
                name={recipe.name}
                image={recipe.image}
                time={recipe.time}
                servings={recipe.servings}
                calories={recipe.calories}
                difficulty={recipe.difficulty}
              />
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export default RecipiesList;
