import styled from "styled-components";

export const SpanStyled = styled.span`
list-style: none;
   height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background-color:  ${(props) => (props.isOnline ? "red" : "green")};;


`;