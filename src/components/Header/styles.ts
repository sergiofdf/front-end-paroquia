import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 12px 0px;

  img {
    margin: 12px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }

  span{
      display: flex;
      align-items: center;
      margin: 12px;
      padding: 4px;
      font-weight: bold;
      text-decoration: none;
      text-align: center;
      color: #888888;

      svg {
        font-size: 39px;
      }
    }

    span:hover{
      color: #309EC1;
      transition: 0.3s;
    }

    .active{
      color: #309EC1;
      transition: 0.3s;
    }
`;
