import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 50vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translateX(-100%); */
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    height: 3rem;
    width: 100%;
    padding: 0 1rem;
  }
  ul{
    list-style: none;
    padding: 0;

  }

  li {
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    text-decoration: none;
    list-style-type: none;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    a{
      text-decoration: none;

      :nth-child(4){
       background-color: green;
       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};

     }

      &:hover {
      color: ${({ theme }) => theme.primaryHover};
     }
     
     
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;