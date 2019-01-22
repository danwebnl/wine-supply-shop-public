import React from 'react';
import styled from 'styled-components';

import RemoveFromCart from './RemoveFromCart';
import { ICartItem } from './Cart';

export interface IProps {
  cartItem: ICartItem
}

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const CartItem = ({ cartItem }: IProps) => {
  // first check if that item exists
  if (!cartItem.product)
    return (
      <CartItemStyles>
        <p>This Item has been removed</p>
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  return (
    <CartItemStyles>
      <img height="100" src={cartItem.product.image} alt={cartItem.product.name} />
      <div className="cart-item-details">
        <h3>{cartItem.product.name}</h3>
        <p>
          €{cartItem.product.price * cartItem.quantity}
          {' - '}
          <em>
            {cartItem.quantity} &times; €{cartItem.product.price} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
};

export default CartItem;
