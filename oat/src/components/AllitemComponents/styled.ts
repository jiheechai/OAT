import styled from "styled-components";

export const AllitemStyledComponent = styled.div`
  max-width: 350px;
  margin-bottom: 50px;
  img {
    max-width: 350px;
    max-height: 450px;
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
  .nameBox {
    height: 50px;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1520px) and (min-width: 1420px) {
    img {
      max-width: 300px; /* 이미지 최대 너비 설정 */
    }
  }
  @media (max-width: 575px) {
    max-width: 280px;
    img {
      max-width: 280px;
      max-height: 400px;
      object-fit: cover;
    }
  }
`;
