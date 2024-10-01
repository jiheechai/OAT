import styled from "styled-components";

export const MainPageStyledComponent = styled.div`
  padding-top: 134px;
  width: 100%;
  .mainimgBox {
    width: 100%;
    vertical-align: top; /* 사진 아래 약간의 공백 제거 */
  }
  h1 {
    text-align: center;
    font-weight: 400;
    margin: 50px;
  }
  .bestitemBox {
    background-color: rgb(247, 247, 247);
    padding: 50px;

    .itemBox {
      display: grid;
      grid-template-columns: repeat(5, 1fr); /* 한 줄에 5개씩 배치 */
      place-items: center;
      margin: auto;
      justify-content: center;
      max-width: 1400px;
    }
  }
  .mainitemBox {
    padding: 50px;
    .itemBox {
      display: grid;
      grid-template-columns: repeat(4, 1fr); /* 한 줄에 5개씩 배치 */
      place-items: center;
      margin: auto;
      /* justify-content: center; */
      max-width: 1700px;
    }
  }

  //반응형 사진 보여지는 갯수 디테일하게 조정
  @media (max-width: 1420px) {
    .bestitemBox {
      .itemBox {
        grid-template-columns: repeat(4, 1fr) !important; /* 한 줄에 4개 */
        /* max-width: 900px !important; */
      }
    }
    .mainitemBox {
      .itemBox {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
  }
  @media (max-width: 1300px) {
    .bestitemBox {
      .itemBox {
        grid-template-columns: repeat(3, 1fr) !important; /* 한 줄에 4개 */
        /* max-width: 1100px !important; */
      }
    }
    .mainitemBox {
      .itemBox {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
  }

  @media (max-width: 900px) {
    .bestitemBox {
      .itemBox {
        grid-template-columns: repeat(2, 1fr) !important; /* 한 줄에 4개 */
        /* max-width: 700px !important; */
      }
    }
    .mainitemBox {
      .itemBox {
        grid-template-columns: repeat(1, 1fr) !important;
      }
    }
  }

  @media (max-width: 640px) {
    .bestitemBox {
      .itemBox {
        grid-template-columns: repeat(1, 1fr) !important; /* 한 줄에 2개 */
      }
    }
    .mainitemBox {
      .itemBox {
        grid-template-columns: repeat(1, 1fr) !important;
      }
    }
  }
`;
