import styled from "styled-components";

export const HeaderStyledComponent = styled.div`
  position: fixed;
  width: 100%;
  .topBox {
    /* margin: 0 50px; */
    display: flex;
    justify-content: space-between;
    background-color: rgb(225, 221, 215);
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    // border-radius: 8%;
    .logoBox {
      margin-left: 30px;
      cursor: pointer;
    }
    .loginBox {
      margin-right: 50px;
      font-size: smaller;
      transition: color 1s ease, text-shadow 0.3s ease; /* 색상과 텍스트 그림자에 전환 효과 추가 */
      &:hover {
        color: #5c4033;
        cursor: pointer;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }

  ul {
    width: 100%;
    background-color: white;
    padding: 0;
    margin: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    font-size: medium;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    li {
      margin: 0 6%;
      transition: color 1s ease, text-shadow 0.3s ease; /* 색상과 텍스트 그림자에 전환 효과 추가 */
      &:hover {
        color: #5c4033;
        cursor: pointer;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      li {
        margin: 0 4%;
      }
    }
  }

  @media (max-width: 575px) {
    ul {
      font-size: small;
      li {
        margin: 0 3%;
      }
    }
  }
`;
