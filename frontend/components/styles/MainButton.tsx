import styled from 'styled-components';

const MainButton = styled.button`
  background: ${props => props.theme.red};
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 5px 10px;
  display: inline-block;
  width: 130px !important;
`;

export default MainButton;
