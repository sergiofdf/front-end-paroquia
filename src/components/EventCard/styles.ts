import styled from 'styled-components';

export const Card = styled.div`
  width: 80%;
  margin: 12px 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #EEEEEE;
  border-radius: 8px;
  box-sizing: border-box;

  h1 {
      font-size: 16px;
      font-weight: bold;
    }

  p {
    font-size: 16px;
    font-weight: normal;
  }

  .label {
    width: 88px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .buttons-container {
    width: 100%;
    justify-content: flex-end;
    gap:32px;

    svg {
      font-size: 32px;
      cursor: pointer;
    }
  }
`;
