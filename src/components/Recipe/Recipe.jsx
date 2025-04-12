import {
  Img,
  Name,
  List,
  Item,
  Text,
  Subtitle,
  DifficultyBox,
  DifficultyList,
  DifficultyItem,
  DifficultyText,
} from "./Recipe.styled.js";

import { LuAlarmClock } from "react-icons/lu";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { TbChartInfographic } from "react-icons/tb";

const Recipe = ({ name, time, servings, calories, difficulty, image }) => {
  return (
    <>
      <Img src={image} alt={[name, "photo"].join(" ")} />
      <Name>{name}</Name>

      <List>
        <Item key="time">
          <LuAlarmClock></LuAlarmClock>
          <Text>{time} min</Text>
        </Item>
        <Item key="servings">
          <MdOutlineIncompleteCircle></MdOutlineIncompleteCircle>
          <Text>{servings} servings</Text>
        </Item>
        <Item key="calories">
          <TbChartInfographic></TbChartInfographic>
          <Text>{calories} calories</Text>
        </Item>
      </List>

      <DifficultyBox>
        <Subtitle>Difficulty</Subtitle>

        <DifficultyList difficulty={difficulty}>
          <DifficultyItem>
            <DifficultyText>Easy</DifficultyText>
          </DifficultyItem>
          <DifficultyItem>
            <DifficultyText>Medium</DifficultyText>
          </DifficultyItem>
          <DifficultyItem>
            <DifficultyText>Hard</DifficultyText>
          </DifficultyItem>
        </DifficultyList>
      </DifficultyBox>
    </>
  );
};

export default Recipe;
