import { LoginPageStyled } from "@/features/LoginPage/styled";
import KakaoLoginButton from "@/components/KakaoLoginButton";
const LoginPage = () => {
  return (
    <LoginPageStyled>
      <div className="loginBox">로그인</div>
      <KakaoLoginButton />
    </LoginPageStyled>
  );
};
export default LoginPage;
