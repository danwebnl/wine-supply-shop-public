import React from 'react';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
// import Error from './ErrorMessage';
import OrderItemStyles from './styles/OrderItemStyles';

export interface IItem {
  id: string;
  name: string;
  quantity: number;
  image: string;
  description: string;
  price: number;
}

interface IOrder {
  id: string;
  total: number;
  items: [IItem];
  createdAt: Date;
}

const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        name
        price
        description
        quantity
        image
      }
    }
  }
`;

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

class OrderList extends React.Component {
  render() {
    return (
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading }) => {
          if (loading) return <p>loading...</p>;
          // if (error) return <Error erorr={error} />;
          return (
            <div>
              <h2>You have {orders.length} orders</h2>
              <OrderUl>
                {orders.map((order: IOrder) => (
                  <OrderItemStyles key={order.id}>
                    <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}
                    >
                      <a>
                        <div className="order-meta">
                          <p>{order.items.length} Products</p>
                          <p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
                          <p>{format(order.createdAt, 'd MMMM YYYY')}</p>
                          <p>€{order.total / 100}</p>
                        </div>
                        <div className="images">
                          {order.items.map((item: IItem) => (
                            <img key={item.id} src={item.image} alt={item.name} />
                          ))}
                        </div>
                        <Details><button type="button">View Details</button></Details>
                      </a>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
