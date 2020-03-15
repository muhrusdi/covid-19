import styled from "styled-components";

export const HeroTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  margin: 0;
`;

export const Section = styled.div`
  margin-top: 60px;
  h3 {
    font-size: 28px;
    font-weight: 800;
  }
`;

export const Card = styled.div`
  transition: all 3s ease-in-out;
  border-radius: 24px;
  margin-top: 28px;
  padding: 16px;
  background-color: #e8e8e8;
  box-shadow: 2px 6px 16px rgba(135, 135, 135, 0.15),
    -4px -2px 16px rgba(255, 255, 255, 0.65);
  overflow: hidden;
  span {
    font-size: 30px;
    font-weight: bold;
  }
`;
