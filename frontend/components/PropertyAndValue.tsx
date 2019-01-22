import styled from 'styled-components';

interface IProps {
  property: string;
  value: string | number;
}

const Container = styled.div`
  display: flex;
`;

const Property = styled.div`
  width: 150px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
`;

const Value = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
`;

const PropertyAndValue = (props: IProps) => (
  <Container>
    <Property>{props.property}</Property>
    <Value>{props.value}</Value>
  </Container>
);

export default PropertyAndValue;
