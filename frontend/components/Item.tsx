import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import DottedSeparation from './styles/DottedSeparation';
import PropertyAndValue from './PropertyAndValue';
import { IItem } from './Items';
import DeleteItem from './DeleteItem';
import { wineCategoriesNamesEnum } from './WineCategories';
import AddToCart from './AddToCart';

type Props = {
  item: IItem;
};

const ImageContainer = styled.div`
  background-color: ${props => props.theme.grey};
  width: 100%;
  cursor: pointer;
`;

const Details = styled.div`
  text-align: left;
  width: calc(100% - 20px);
  height: 100%;
  font-size: 14px;
  margin: 10px;
`;

class Item extends Component<Props> {
  render(): JSX.Element {
    const { item } = this.props;

    return (
      <ItemStyles>
        {item.image && (
          <Link
            href={{
              pathname: '/product',
              query: { id: item.id }
            }}
          >
            <ImageContainer>
              <img src={item.image} alt={item.name} />
            </ImageContainer>
          </Link>
        )}
        <Title>
          <Link
            href={{
              pathname: '/product',
              query: { id: item.id }
            }}
          >
            <a>{item.name}</a>
          </Link>
        </Title>
        <PriceTag>€ {item.price}</PriceTag>

        <Details>
          {item.description && <div>{item.description}</div>}

          <DottedSeparation />

          {item.category && (
            <PropertyAndValue
              property="Category"
              value={wineCategoriesNamesEnum[item.category]}
            />
          )}
          {item.country && (
            <PropertyAndValue property="Country" value={item.country} />
          )}
          {item.year && <PropertyAndValue property="Year" value={item.year} />}
          {item.taste && (
            <PropertyAndValue property="Taste" value={item.taste} />
          )}
          {item.food && (
            <PropertyAndValue property="Delicious with" value={item.food} />
          )}
        </Details>

        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id }
            }}
          >
            <a>Edit</a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>Delete Product</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
