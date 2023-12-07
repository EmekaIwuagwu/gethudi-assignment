import { StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Heading = ({ children, type , weight , lh , ls }) => {
  const StyledHeading = styled.Text`
    color: black;
    font-size: ${(prop) =>
      prop.type === 1
        ? 28
        : prop.type === 2
        ? 20
        : prop.type === 3
        ? 17
        : null}px;
    font-weight : ${weight};
    line-height : ${lh} px;
    letter-spacing : ${ls} px;
  `;

  return <StyledHeading type={type}>{children} </StyledHeading>;
};

export default Heading;

const styles = StyleSheet.create({});
