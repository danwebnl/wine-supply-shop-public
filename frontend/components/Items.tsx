import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Pagination from './Pagination';
import Item from './Item';
import { perPage } from '../config';

interface IProps {
  page: number;
}

export interface IItem {
  id: string;
  name: string;
  price: number;
  category: number;
  country: string;
  year: number;
  description: string;
  taste: string;
  food: string;
  image: string;
}

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    products(first: $first, skip: $skip, orderBy: createdAt_ASC) {
      id
      name
      price
      category
      country
      description
      taste
      food
      image
      year
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class items extends Component<IProps> {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <Query
          query={ALL_PRODUCTS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}.</p>;
            return (
              <ItemsList>
                {data.products.map((item: IItem) => (
                  <Item key={item.id} item={item} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default items;
export { ALL_PRODUCTS_QUERY };
