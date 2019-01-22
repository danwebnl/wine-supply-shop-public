import styled from 'styled-components';

const OrderItemStyles = styled.li`
  box-shadow: ${props => props.theme.bs};
  list-style: none;
  padding: 2rem;
  border: 1px solid ${props => props.theme.offWhite};
  h2 {
    border-bottom: 2px solid red;
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .images {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-top: 1rem;
    img {
      height: 100px;
      object-fit: cover;
    }
  }
  .order-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    & > * {
      margin: 0;
      background: rgba(0, 0, 0, 0.03);
      padding: 1rem 0;
    }
    strong {
      display: block;
      margin-bottom: 1rem;
    }
  }

  button {
    width: auto;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
`;

export default OrderItemStyles;
