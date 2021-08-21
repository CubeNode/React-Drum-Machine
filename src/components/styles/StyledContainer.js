import styled from 'styled-components';

export const StyledContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;

  .drum-pad {
    flex-grow: 1;
    width: 25%;
    background-color: #00CC99;
    color: #fff;
    margin: 10px;
    text-align: center;
    font-size: 2em;
    font-family: Arial, sans-serif;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.43);
  }

  .drum-pad:active {
    background-color: #1FFFC7;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.43);
  }

  .active {
    background-color: #1FFFC7;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.43);
  }

  .disabled {
    pointer-events: none;
    background-color: gray;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.43);
  }

  @media (max-width: 768px) {
    .drum-pad {
      flex-grow: 2;
    }
  }
`
