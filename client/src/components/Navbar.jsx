import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(141deg, #e8ebc7 0%, rgba(226, 236, 116, 0) 100%);
  padding: 0.5rem 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: auto;
`;

const Logo = styled.a`
  font-weight: 800;
  font-size: 1.7rem;
  color: #000;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 30%; */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #000;
  }

`;

const AnotherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;

const VisitNow = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

function Navbar() {
  return (
    <>
      <Nav>
        <Logo>Logo</Logo>
        <AnotherContainer>
          <NavItems>Home</NavItems>
          <NavItems>About Us</NavItems>
          <NavItems>FAQ</NavItems>
          <NavItems>Contact US</NavItems>
        </AnotherContainer>
        <VisitNow>Visit Now</VisitNow>
      </Nav>
    </>
  );
}

export default Navbar;
