import styled from 'styled-components';

const PriceTag = styled.span`
  font-family: 'Lora', serif;
  background: ${props => props.theme.red};
  color: white;
  border-radius: 7px;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: -8px;
`;

export default PriceTag;
