import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { ALL_PRODUCTS_QUERY } from './Items';
import { PAGINATION_QUERY } from './Pagination';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

interface IProps {
  id: string;
  children: string;
}

class DeleteItem extends Component<IProps> {
  // cache - check browser Apollo caches
  // payload - whet comes back after the delete
  update = (cache: any, payload: any) => {
    //read the products list form cache
    const data = cache.readQuery({ query: ALL_PRODUCTS_QUERY });

    //remove the product that was just deleted
    data.products = data.products.filter(
      (product: any) => product.id !== payload.data.deleteProduct.id
    );

    //update the cache
    cache.writeQuery({ query: ALL_PRODUCTS_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_PRODUCT_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        refetchQueries={() => {
          return [{ query: ALL_PRODUCTS_QUERY }, { query: PAGINATION_QUERY }];
        }}
      >
        {deleteProduct => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this Wine?')) {
                deleteProduct().catch((err: any) => { alert(err.message) });
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
