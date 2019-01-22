import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import MainButton from './styles/MainButton';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import TakeMyMoney from './TakeMyMoney';

export interface ICartItem {
    id: string;
    quantity: number;
    product: {
        name: string;
        image: string;
        price: number;
    }
}

// @client indicates apollo not to look at graphql but to the local client data
const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client 
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;
/* eslint-disable */
const Composed = adopt({
    user: ({ render }) => <User>{render}</User>,
    toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
    localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});
/* eslint-enable */

const Cart = () => (
    <Composed>
        {({ user, toggleCart, localState }: any) => {
            const me = user.data.me;
            if (!me) return null;
            // console.log(me);
            return (
                <CartStyles open={localState.data.cartOpen}>
                    <header>
                        <CloseButton onClick={toggleCart} title="close">
                            &times;
                        </CloseButton>
                        <Supreme>{me.name}'s Cart</Supreme>
                        <p>
                            You Have {me.cart.length} Product{me.cart.length === 1 ? '' : 's'} in your cart.
                        </p>
                    </header>
                    <ul>{me.cart.map((cartItem: ICartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}</ul>
                    <footer>
                        <p>€{calcTotalPrice(me.cart).toFixed(2)}</p>
                        {me.cart.length && (
                            <TakeMyMoney>
                                <MainButton>Checkout</MainButton>
                            </TakeMyMoney>
                        )}
                    </footer>
                </CartStyles>
            );
        }}
    </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
