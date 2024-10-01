import { FooterStyledComponent } from "./styled";
const Footer = () => {
  return (
    <FooterStyledComponent>
      <div className="topBox">
        <p>주식회사 OAT CEO:최지은 고객센터:070-4237-7726</p>
        <p>
          02566 서울특별시 동대문구 왕산로 122 (용두동) 한방천하 용두동 포스빌,
          18층
        </p>
        <p>사업자등록번호 : 841-87-01191 [사업자정보확인]</p>
      </div>

      <ul>
        <li>개인정보처리방침</li>
        <li>이용약관</li>
      </ul>
    </FooterStyledComponent>
  );
};
export default Footer;
