import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';

import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import { IItem } from './Items';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    products(where: { OR: [{ category_contains: $searchTerm }, { description_contains: $searchTerm }, { name_contains: $searchTerm }] }) {
      id
      image
      name
    }
  }
`;

function routeToItem(item: IItem) {
  if (!item) return;
  Router.push({
    pathname: '/product',
    query: {
      id: item.id,
    },
  })
    ;
}

class AutoComplete extends React.Component {
  state = {
    items: [],
    loading: false,
  };

  onChange = debounce(async (e, client) => {

    // console.log('Searching...');
    // turn loading on
    this.setState({ loading: true });
    // Manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value },
    });
    this.setState({
      items: res.data.products,
      loading: false,
    });
  }, 350);
  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.name)}>
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, clearSelection }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search For A Wine',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.value === '') {
                          clearSelection();
                          this.setState({
                            items: [],
                            loading: false,
                          });
                          return;
                        }
                        e.persist();
                        this.onChange(e, client);
                      },
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.items.map((item: IItem, index) => (
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img height="60" src={item.image} alt={item.name} />
                      {item.name}
                    </DropDownItem>
                  ))}
                  {!this.state.items.length &&
                    !this.state.loading && <DropDownItem> Nothing Found {inputValue}</DropDownItem>}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles >
    );
  }
}

export default AutoComplete;
