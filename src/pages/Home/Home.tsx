import { Header } from "components/Header";
import { Link as RouteLink } from "react-router-dom";
import styled from "styled-components";

const ChallengesList = styled.ul`
  margin-top: 2em;
  width: 30em;
`;

const ChallengeItem = styled.li`
  list-style-type: none;
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  min-height: 4.1em;
  color: #f5f6f7;
  background-color: #3b3b4f;
  margin: 10px 0;
  padding: 0 10px;
  border: 3px solid #f5f6f7;
  font-weight: 400;
  font-size: 1.1rem;
  &:hover {
    background-color: #f5f6f7;
    color: #3b3b4f;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <ChallengesList>
          <ChallengeItem>
            <RouteLink to="/palindrome-checker">
              <Link>Verificador de palíndromo</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/roman-numeral-converter">
              <Link>Conversor de numerais romanos</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/ceasars-cipher">
              <Link>Cifra de César</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/telephone-number-validator">
              <Link>Validador de Número de telefone</Link>
            </RouteLink>
          </ChallengeItem>
          <ChallengeItem>
            <RouteLink to="/cash-register">
              <Link>Caixa registradora</Link>
            </RouteLink>
          </ChallengeItem>
        </ChallengesList>
      </Main>
    </>
  );
};
