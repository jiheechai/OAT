import { useEffect, useState } from "react";
import { AllitemStyledComponent } from "./styled";
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

const AllitemComponents = ({ item }: PropsData) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % item.src.length); // currentIndex를 src 길이에 맞게 조정
    }, 2000); // 2초마다 이미지 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
  }, [item]);

  return (
    <AllitemStyledComponent>
      <img src={item.src[currentIndex].src} alt="사진" />
      <p className="nameBox">{item.name}</p>
      <h3>{item.price.toLocaleString()}</h3>
    </AllitemStyledComponent>
  );
};

export default AllitemComponents;
