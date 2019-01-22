import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';

import Error from './ErrorMessage';
import PropertyAndValue from './PropertyAndValue';
import DottedSeparation from './styles/DottedSeparation';
import { wineCategoriesNamesEnum } from './WineCategories';

const SingleItemStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: ${props => props.theme.grey};
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const Details = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
  font-size: 14px;
`;

const PriceTag = styled.span`
  font-family: 'Lora', serif;
  background: ${props => props.theme.red};
  color: white;
  border-radius: 7px;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  bottom: 20px;
`;

interface IProps {
  id: string;
}

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      price
      country
      category
      description
      taste
      food
      image
    }
  }
`;

class SingleItem extends Component<IProps> {
  render() {
    return (
      <Query query={SINGLE_PRODUCT_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.product) return <p>No Item Found for {this.props.id}</p>;
          const item = data.product;
          return (
            <SingleItemStyles>
              <Head>
                <title>Wine Supply Shop| {item.name}</title>
              </Head>
              <img src={item.image} alt={item.title} />
              <div className="details">
                <h2>{item.name}</h2>
                <PriceTag>€ {item.price}</PriceTag>
                {item.description && <p>{item.description}</p>}
                <DottedSeparation />
                <Details>
                  {item.category && (
                    <PropertyAndValue
                      property="Category"
                      value={wineCategoriesNamesEnum[item.category]}
                    />
                  )}
                  {item.country && (
                    <PropertyAndValue property="Country" value={item.country} />
                  )}
                  {item.year && (
                    <PropertyAndValue property="year" value={item.year} />
                  )}
                  {item.taste && (
                    <PropertyAndValue property="Taste" value={item.taste} />
                  )}
                  {item.food && (
                    <PropertyAndValue
                      property="Delicious with"
                      value={item.food}
                    />
                  )}
                </Details>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
