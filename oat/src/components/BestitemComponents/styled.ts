import styled from "styled-components";

export const BestitemStyledComponent = styled.div`
  max-width: 250px;
  margin-bottom: 50px;
  img {
    max-width: 250px;
    max-height: 300px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
  .nameBox {
    height: 60px;
    &:hover {
      cursor: pointer;
    }
  }
`;
