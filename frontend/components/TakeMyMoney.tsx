import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import gql from 'graphql-tag';

import calcTotalPrice from '../lib/calcTotalPrice';
// import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';
import { ICartItem } from './Cart';

interface IError {
  message: string
}

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

function totalItems(cart: [ICartItem]) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends React.Component {
  onToken = async (res: any, createOrder: any) => {
    NProgress.start();
    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch((err: IError) => {
      alert(err.message);
    });

    Router.push({
      pathname: '/order',
      query: { id: order.data.createOrder.id },
    });
  };
  render() {
    return (
      <User>
        {({ data: { me }, loading }: any) => {
          if (loading) return null;
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {createOrder => (
                <StripeCheckout
                  amount={calcTotalPrice(me.cart) * 100}
                  name="Wine Supply Shop"
                  description={`Order of ${totalItems(me.cart)} items!`}
                  image={me.cart.length && me.cart[0].product && me.cart[0].product.image}
                  stripeKey="pk_test_B3R5jsy6sRyCjs8yJcKjXgmJ"
                  currency="EUR"
                  email={me.email}
                  token={res => this.onToken(res, createOrder)}
                >
                  {this.props.children}
                </StripeCheckout>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakeMyMoney;
export { CREATE_ORDER_MUTATION };
