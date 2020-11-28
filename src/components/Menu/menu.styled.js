import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: auto;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: ${({ open }) => open ? 'flex' : 'none'};
  transition: transform 0.3s ease-in-out;
  position: relative;
  margin-bottom: .5rem;
  
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
    padding: .5rem 0;
    font-weight: bold;
    letter-spacing: 0.25rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    list-style-type: none;

    :nth-child(4){
       background-color: green;
       text-align: center;
       border-radius: 5px;

       &:hover {
        color: ${({ theme }) => theme.primaryLight};
       }
     }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    a{
      text-decoration: none;

      &:hover {
      color: ${({ theme }) => theme.primaryDark};
     }
    }
    
  }
`;