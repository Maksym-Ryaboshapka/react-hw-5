import styled from "styled-components";

export const Img = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 16px;
`;

export const Name = styled.h2`
  margin: 10px 0;
  font-size: 20px;
`;

export const List = styled.ul`
  width: 350px;
  padding: 15px;
  border-radius: 18px;
  margin: 0 0 10px 0;

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const DifficultyBox = styled.div`
  width: 250px;
  border-radius: 12px;
  padding: 10px 20px 20px 20px;

  background-color: #fff;
`;

export const Subtitle = styled.h3`
  margin: 0 0 12px 0;

  font-size: 18px;
`;

export const DifficultyList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  & > li:nth-child(${(props) => props.difficulty + 1}) {
    background-color: #fa7070;
    color: #fff;
  }
`;

export const DifficultyItem = styled.li`
  padding: 8px;
  border-radius: 16px;

  background-color: #fff7d9;
`;

export const DifficultyText = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
