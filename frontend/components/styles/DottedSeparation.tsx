import styled from 'styled-components';

const DottedSeparation = styled.hr`
  border: none;
  border-top: 2px dotted ${props => props.theme.lightgrey};
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
`;

export default DottedSeparation;
