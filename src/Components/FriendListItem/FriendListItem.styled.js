import styled from "styled-components";

export const SpanStyled = styled.span`
   height: 25px;
   width: 25px;
   border-radius: 50%;
   display: inline-block;
   background-color: ${(props) => (props.isOnline ? "red" : "green")};;

   `;

export const LiStyled = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   list-style: none;
`;