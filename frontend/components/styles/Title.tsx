import styled from 'styled-components';

const Title = styled.h3`
  font-family: 'Lora', serif;
  margin: 0 1rem;
  text-align: center;
  border-radius: 7px;
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${props => props.theme.red};
    display: inline;
    line-height: 1.3;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;
