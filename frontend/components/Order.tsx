import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Head from 'next/head';
import gql from 'graphql-tag';

// import Error from './ErrorMessage';
import OrderStyles from './styles/OrderStyles';
import { IItem } from './OrderList';

interface IProps {
  id: string
}

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        name
        description
        price
        image
        quantity
      }
    }
  }
`;

class Order extends React.Component<IProps> {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          // if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const order = data.order;
          return (
            <OrderStyles data-test="order">
              <Head>
                <title>Wine Supply Shop - Order {order.id}</title>
              </Head>
              <p>
                <span>Order ID:</span>
                <span>{this.props.id}</span>
              </p>
              <p>
                <span>Charge ID</span>
                <span>{order.charge}</span>
              </p>
              <p>
                <span>Date</span>
                <span>{format(order.createdAt, 'd MMMM YYYY, h:mm a')}</span>
              </p>
              <p>
                <span>Order Total</span>
                <span>€{order.total / 100}</span>
              </p>
              <p>
                <span>Item Count</span>
                <span>{order.items.length}</span>
              </p>
              <div className="items">
                {order.items.map((item: IItem) => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h2>{item.name}</h2>
                      <p>Qty: {item.quantity}</p>
                      <p>Each: €{item.price}</p>
                      <p>SubTotal: €{item.price * item.quantity}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>
          );
        }}
      </Query>
    );
  }
}

export default Order;
export { SINGLE_ORDER_QUERY };
