import oatLogo from "@/assets/oatLogo.png";
import { HeaderStyledComponent } from "./styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { data } from "@/utill/data";
const Header = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login"); // '/login' 경로로 페이지 이동
  };
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState<any>(null); // 유저 정보를 저장할 state

  // useEffect(() => {
  //   // 세션 또는 로컬 스토리지에서 카카오 로그인 정보를 가져오는 부분
  //   const kakaoUser = JSON.parse(sessionStorage.getItem("kakaoUser") || "null");

  //   if (kakaoUser) {
  //     setUser(kakaoUser); // 유저 정보를 state에 저장
  //   }
  // }, []);

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  // 카테고리에 따른 데이터 필터링 함수
  const filteredData =
    selectedCategory === "ALL"
      ? data
      : data.filter((item) =>
          item.category.some((category) => category.tag === selectedCategory)
        );
  return (
    <HeaderStyledComponent>
      <div className="topBox">
        <div
          className="logoBox"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src={oatLogo.src} />
        </div>
        <div className="loginBox" onClick={handleLoginClick}>
          Login
        </div>
      </div>

      <ul>
        <li onClick={() => setSelectedCategory("ALL")}>ALL</li>
        <li onClick={() => setSelectedCategory("OUTER")}>OUTER</li>
        <li onClick={() => setSelectedCategory("TOP")}>TOP</li>
        <li onClick={() => setSelectedCategory("BOTTOMS")}>BOTTOMS/OPS</li>
        <li onClick={() => setSelectedCategory("BAG/ACC")}>BAG/ACC</li>
      </ul>
    </HeaderStyledComponent>
  );
};
export default Header;
