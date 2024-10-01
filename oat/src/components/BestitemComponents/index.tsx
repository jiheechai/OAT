import { useEffect, useState } from "react";
import { BestitemStyledComponent } from "./styled";

interface PropsData {
  item: {
    id: number;
    name: string;
    price: number;
    color: string;
    size: string[];
    category: { tag: string }[];
    src: any; // 이미지 URL 배열
  };
}

const BestitemComponents = ({ item }: PropsData) => {
  // 현재 이미지 인덱스 상태
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // 2초마다 이미지 인덱스 변경
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % item.src.length);
    }, 2000); // 2000ms = 2초

    // 컴포넌트 언마운트 시 interval 제거
    return () => clearInterval(interval);
  }, [item.src.length]); // 이미지 개수가 바뀌면 effect 재실행

  return (
    <BestitemStyledComponent>
      <img src={item.src[currentIndex].src} alt="사진" />
      <p className="nameBox">{item.name}</p>
      <h3>{item.price.toLocaleString()}</h3>
      <div></div>
    </BestitemStyledComponent>
  );
};
export default BestitemComponents;
