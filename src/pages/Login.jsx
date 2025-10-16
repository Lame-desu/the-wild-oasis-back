import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <div
        style={{
          display: "flex",
          gap: "10px",
          backgroundColor: "white",
          color: "black",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <span>Demo user?</span>{" "}
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            Email: <span style={{ fontWeight: "bolder" }}>test@gmail.com</span>
          </div>{" "}
          <div>
            password: <span style={{ fontWeight: "bolder" }}>123456</span>
          </div>
        </div>
      </div>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
