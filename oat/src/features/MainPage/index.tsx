import { MainPageStyledComponent } from "./styled";
import oatMain from "@/assets/oatMain.png";
import { data } from "@/utill/data";
import BestitemComponents from "@/components/BestitemComponents";
import AllitemComponents from "@/components/AllitemComponents";
import { Pagination } from "antd";
import { useState } from "react";

const MainPage = () => {
  // category에서 tag가 "bestitem"인 것들을 필터링
  const bestItems = data.filter((item) =>
    item.category.some((category) => category.tag === "bestitem")
  );
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const pageSize = 12; // 페이지당 항목 수
  // 현재 페이지에 보여줄 항목 계산
  // const startIndex = (currentPage - 1) * pageSize;
  // const currentItems = data.slice(startIndex, startIndex + pageSize);

  // const onChangePage = (page: any) => {
  //   setCurrentPage(page); // 페이지 변경 시 현재 페이지 상태 업데이트
  // };
  return (
    <MainPageStyledComponent>
      <img src={oatMain.src} alt="oatMain" className="mainimgBox" />
      <div className="bestitemBox">
        <h1>BEST ITEM</h1>
        <div className="itemBox">
          {bestItems?.map((item: any, index: number) => (
            <BestitemComponents item={item} key={index} />
          ))}
        </div>
      </div>

      <div className="mainitemBox">
        <h1>OAT</h1>
        <div className="itemBox">
          {data.map((item: any, index: number) => (
            <AllitemComponents item={item} key={index} />
          ))}
        </div>
        {/* <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={onChangePage} // 페이지 변경 이벤트 처리
          showSizeChanger={false} // 페이지 사이즈 변경기 숨기기
        /> */}
      </div>
    </MainPageStyledComponent>
  );
};
export default MainPage;
